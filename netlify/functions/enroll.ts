import type { Handler, HandlerEvent } from "@netlify/functions";
import { Resend } from "resend";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

const enrollmentSubmissionsTable = pgTable("enrollment_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  age: text("age").notNull(),
  program: text("program").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body: { name?: string; email?: string; phone?: string; age?: string; program?: string; message?: string };
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, phone, age, program, message } = body;

  if (!name || !email || !age || !program) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email, age, and program are required." }),
    };
  }

  // Save to DB — best-effort, never blocks the email
  if (process.env.DATABASE_URL) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
    try {
      const db = drizzle(pool);
      await db.insert(enrollmentSubmissionsTable).values({
        name,
        email,
        phone: phone ?? null,
        age,
        program,
        message: message ?? null,
      });
    } catch (dbErr) {
      console.error("DB insert error (non-fatal):", dbErr);
    } finally {
      await pool.end().catch(() => {});
    }
  }

  const notifyEmail = process.env.NOTIFY_EMAIL ?? "royaleblessingent@gmail.com";

  try {
    await resend.emails.send({
      from: "RBE Performing Arts <onboarding@resend.dev>",
      to: [notifyEmail],
      replyTo: email,
      subject: `New Enrollment Inquiry — ${program} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D1A3A; color: #fff; padding: 40px; border-radius: 8px;">
          <h2 style="color: #C9A84C; font-size: 28px; margin-bottom: 24px;">New Enrollment Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #aaa; width: 120px;">Name</td><td style="padding: 8px 0; color: #fff; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #aaa;">Phone</td><td style="padding: 8px 0; color: #fff;">${phone}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #aaa;">Student Age</td><td style="padding: 8px 0; color: #fff;">${age}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Program</td><td style="padding: 8px 0; color: #C9A84C; font-weight: 600;">${program}</td></tr>
          </table>
          ${message ? `
          <hr style="border-color: #C9A84C33; margin: 24px 0;" />
          <h3 style="color: #C9A84C; font-size: 16px; margin-bottom: 12px;">Notes / Questions</h3>
          <p style="color: #ccc; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          ` : ""}
          <hr style="border-color: #C9A84C33; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px;">Sent via the RBE Performing Arts enrollment form. Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });
  } catch (emailErr) {
    console.error("Email send error:", emailErr);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email. Please try again." }),
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ success: true }),
  };
};
