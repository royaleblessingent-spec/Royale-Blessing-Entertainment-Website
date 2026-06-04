import type { Handler, HandlerEvent } from "@netlify/functions";
import { Resend } from "resend";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { contactSubmissionsTable } from "../../lib/db/src/schema/contact_submissions";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  let body: { name?: string; email?: string; subject?: string; message?: string };
  try {
    body = JSON.parse(event.body ?? "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email, and message are required." }),
    };
  }

  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const db = drizzle(pool);

  try {
    await db.insert(contactSubmissionsTable).values({ name, email, subject: subject ?? null, message });
  } catch (dbErr) {
    console.error("DB insert error:", dbErr);
    await pool.end().catch(() => {});
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save your message. Please try again or email us directly." }),
    };
  }

  await pool.end().catch(() => {});

  const notifyEmail = process.env.NOTIFY_EMAIL ?? "royaleblessingent@gmail.com";

  try {
    await resend.emails.send({
      from: "RBE Website <onboarding@resend.dev>",
      to: [notifyEmail],
      replyTo: email,
      subject: `New Contact Inquiry${subject ? ` — ${subject}` : ""} from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D1A3A; color: #fff; padding: 40px; border-radius: 8px;">
          <h2 style="color: #C9A84C; font-size: 28px; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #aaa; width: 100px;">Name</td><td style="padding: 8px 0; color: #fff; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #aaa;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding: 8px 0; color: #aaa;">Subject</td><td style="padding: 8px 0; color: #fff;">${subject}</td></tr>` : ""}
          </table>
          <hr style="border-color: #C9A84C33; margin: 24px 0;" />
          <h3 style="color: #C9A84C; font-size: 16px; margin-bottom: 12px;">Message</h3>
          <p style="color: #ccc; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: #C9A84C33; margin: 24px 0;" />
          <p style="color: #666; font-size: 12px;">Sent via the RBE website contact form. Reply directly to this email to respond to ${name}.</p>
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
