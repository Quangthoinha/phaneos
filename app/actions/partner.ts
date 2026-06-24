"use server";

import { google } from "googleapis";

export interface PartnerRegistrationData {
  agency: string;
  name: string;
  email: string;
  phone: string;
  model: string;
  message: string;
  timeToMeet?: string;
}

const brevoApiKey = process.env.BREVO_API_KEY;
const toEmail = process.env.PARTNER_INBOX_EMAIL ?? "partner@phaneosai.com";
const fromEmail = process.env.FROM_EMAIL ?? "onboarding@phaneosai.com";

const googleServiceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const googlePrivateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
const googleSheetId =
  process.env.GOOGLE_SHEET_ID ?? "1mBYZ78MJUtpqwfXzPo0haH-KteKbn9Sz6h9R-UWsSsk";
const googleSheetName = process.env.GOOGLE_SHEET_NAME ?? "Registrations";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+?[0-9][0-9\s\-()]{6,18}[0-9]$/.test(phone);
}

async function appendToSheet(data: PartnerRegistrationData) {
  if (!googleServiceAccountEmail || !googlePrivateKey) {
    console.log("[INFO] Google Sheets credentials not configured. Skipping sheet log.");
    return { success: true, skipped: true };
  }

  try {
    const auth = new google.auth.JWT({
      email: googleServiceAccountEmail,
      key: googlePrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Resolve the target sheet name; fall back to the first sheet if the
    // configured name does not exist. This avoids failures when the default
    // "Registrations" tab has not been created yet.
    let sheetName = googleSheetName;
    try {
      const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: googleSheetId });
      const availableNames =
        spreadsheet.data.sheets?.map((s) => s.properties?.title).filter(Boolean) ?? [];
      if (!availableNames.includes(sheetName) && availableNames.length > 0) {
        sheetName = availableNames[0]!;
      }
    } catch {
      // If we cannot list sheets, keep the configured name and let append fail visibly.
    }

    const timestamp = new Date().toISOString();

    // Read the existing header to locate special columns and align values.
    let header: (string | null)[] = [];
    try {
      const headerResult = await sheets.spreadsheets.values.get({
        spreadsheetId: googleSheetId,
        range: `${sheetName}!A1:Z1`,
      });
      header = headerResult.data.values?.[0] ?? [];
    } catch {
      // If the header cannot be read, leave it empty and create a default one below.
    }

    const headerLabels = header.map((h) => h?.toString().toLowerCase().trim() ?? "");

    // Locate the submission-time column (Time/Timestamp/Date submitted).
    const submittedTimeIndex = headerLabels.findIndex((label) =>
      ["time", "timestamp", "date"].some(
        (keyword) => label.includes(keyword) && !label.includes("meet")
      )
    );

    // Locate the preferred meeting time column.
    const timeToMeetIndex = headerLabels.findIndex(
      (label) => label.includes("time to meet") || label.includes("meet")
    );

    const baseRow = [
      data.agency,
      data.name,
      data.email,
      data.phone,
      data.model,
      data.message || "—",
    ];

    // Build a row that matches the header width.
    let row: string[];
    if (submittedTimeIndex >= 0) {
      row = [...baseRow];
      row.splice(submittedTimeIndex, 0, timestamp);
    } else {
      row = [timestamp, ...baseRow];
    }

    if (timeToMeetIndex >= 0) {
      row[timeToMeetIndex] = data.timeToMeet || "—";
    } else {
      // If the sheet does not have a "Time to meet" column, append it to the header
      // and add the value at the end of each new row.
      row.push(data.timeToMeet || "—");
      const newHeaderColumn = header.length > 0 ? header.length : row.length - 1;
      header[newHeaderColumn] = "Time to meet";
      try {
        await sheets.spreadsheets.values.update({
          spreadsheetId: googleSheetId,
          range: `${sheetName}!A1:Z1`,
          valueInputOption: "USER_ENTERED",
          requestBody: { values: [header.map((h) => h ?? "")] },
        });
      } catch (headerError) {
        console.warn("Could not update sheet header with Time to meet column:", headerError);
      }
    }

    const columns = row.length;

    await sheets.spreadsheets.values.append({
      spreadsheetId: googleSheetId,
      range: `${sheetName}!A1:${columnToLetter(columns)}1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    });

    return { success: true, skipped: false };
  } catch (error) {
    console.error("Failed to append partner registration to Google Sheet:", error);
    return { success: false, error: "Sheet log failed" };
  }
}

export async function submitPartnerRegistration(data: PartnerRegistrationData) {
  const { agency, name, email, phone, model, message, timeToMeet } = data;

  if (!agency.trim()) return { success: false, error: "Agency name is required" };
  if (!name.trim()) return { success: false, error: "Full name is required" };
  if (!isValidEmail(email.trim())) return { success: false, error: "A valid email is required" };
  if (!isValidPhone(phone.trim())) return { success: false, error: "A valid phone number is required" };
  if (!model) return { success: false, error: "A partnership model is required" };

  const subject = `New partner registration — ${agency}`;
  const html = `
    <h2>New partner registration</h2>
    <p><strong>Agency:</strong> ${escapeHtml(agency)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Model:</strong> ${escapeHtml(model)}</p>
    <p><strong>Preferred time to meet:</strong> ${escapeHtml(timeToMeet || "—")}</p>
    <p><strong>Message:</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
  `;

  // Always attempt to log to Google Sheets first so registrations are captured
  // even if the email service is not configured or fails.
  const sheetResult = await appendToSheet(data);

  let emailResult: { success: boolean; error?: string } = { success: true };
  if (!brevoApiKey) {
    // In development without a Brevo key, log the payload to the console.
    // In production without a Brevo key, still accept the registration if it
    // was saved to the sheet, but warn that email notifications are not active.
    if (process.env.NODE_ENV === "development") {
      console.log("[DEV] Partner registration would be sent:", { toEmail, subject, html });
    } else if (!sheetResult.success) {
      return { success: false, error: "Email service is not configured and sheet log failed." };
    } else {
      emailResult = { success: false, error: "Email service is not configured" };
    }
  } else {
    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          accept: "application/json",
          "api-key": brevoApiKey,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          sender: { name: "phaneosAI", email: fromEmail },
          to: [{ email: toEmail }],
          replyTo: { email: email.trim() },
          subject,
          htmlContent: html,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.text();
        console.error("Brevo email failed:", response.status, errorBody);
        emailResult = { success: false, error: "Failed to send registration. Please try again." };
      }
    } catch (error) {
      console.error("Partner registration email failed:", error);
      emailResult = { success: false, error: "Failed to send registration. Please try again." };
    }
  }

  // If the email was not sent but the sheet write succeeded, still return
  // success so the user gets confirmation, with a warning for the admin.
  if (!emailResult.success) {
    if (sheetResult.success && !sheetResult.skipped) {
      return {
        success: true,
        warning: "Registration saved, but email notification is not configured yet. Please set BREVO_API_KEY.",
      };
    }
    return { success: false, error: emailResult.error };
  }

  if (!sheetResult.success) {
    console.warn("Partner registration email sent but sheet log failed:", sheetResult.error);
  }

  return { success: true };
}

function columnToLetter(index: number) {
  let result = "";
  let n = index;
  while (n > 0) {
    n--;
    result = String.fromCharCode(65 + (n % 26)) + result;
    n = Math.floor(n / 26);
  }
  return result;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
