import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { google } from "googleapis";

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

const result = await sheets.spreadsheets.get({
  spreadsheetId: process.env.GOOGLE_SHEET_ID || "1mBYZ78MJUtpqwfXzPo0haH-KteKbn9Sz6h9R-UWsSsk",
});

console.log("Spreadsheet title:", result.data.properties?.title);
console.log("Sheets:");
result.data.sheets?.forEach((sheet) => {
  console.log(`  - "${sheet.properties?.title}" (id: ${sheet.properties?.sheetId})`);
});
