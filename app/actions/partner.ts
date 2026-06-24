"use server";

import { Resend } from "resend";
import { google } from "googleapis";

export interface PartnerRegistrationData {
  agency: string;
  name: string;
  email: string;
  phone: string;
  model: string;
  message: string;
}

const resendApiKey = process.env.RESEND_API_KEY;
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

    const timestamp = new Date().toISOString();
    const row = [
      timestamp,
      data.agency,
      data.name,
      data.email,
      data.phone,
      data.model,
      data.message || "—",
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: googleSheetId,
      range: `${googleSheetName}!A1:G1`,
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
  const { agency, name, email, phone, model, message } = data;

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
    <p><strong>Message:</strong><br/>${escapeHtml(message || "—").replace(/\n/g, "<br/>")}</p>
  `;

  // In development without a Resend key, log the payload and return success
  // so the UI can still be tested. In production, a missing key is a real error.
  let emailResult: { success: boolean; error?: string } = { success: true };
  if (!resendApiKey) {
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: "Email service is not configured" };
    }
    console.log("[DEV] Partner registration would be sent:", { toEmail, subject, html });
  } else {
    try {
      const resend = new Resend(resendApiKey);
      const result = await resend.emails.send({
        from: `phaneosAI <${fromEmail}>`,
        to: [toEmail],
        replyTo: email.trim(),
        subject,
        html,
      });

      if (result.error) {
        emailResult = { success: false, error: "Failed to send registration. Please try again." };
      }
    } catch (error) {
      console.error("Partner registration email failed:", error);
      emailResult = { success: false, error: "Failed to send registration. Please try again." };
    }
  }

  // Always attempt to log to Google Sheets, but do not block success on sheet failure
  const sheetResult = await appendToSheet(data);

  if (!emailResult.success) {
    return { success: false, error: emailResult.error };
  }

  if (!sheetResult.success) {
    console.warn("Partner registration saved but sheet log failed:", sheetResult.error);
  }

  return { success: true };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
