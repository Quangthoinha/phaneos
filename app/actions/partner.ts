"use server";

import { Resend } from "resend";

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

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^\+?[0-9][0-9\s\-()]{6,18}[0-9]$/.test(phone);
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
  if (!resendApiKey) {
    if (process.env.NODE_ENV === "production") {
      return { success: false, error: "Email service is not configured" };
    }
    console.log("[DEV] Partner registration would be sent:", { toEmail, subject, html });
    return { success: true };
  }

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
      return { success: false, error: "Failed to send registration. Please try again." };
    }

    return { success: true };
  } catch (error) {
    console.error("Partner registration email failed:", error);
    return { success: false, error: "Failed to send registration. Please try again." };
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
