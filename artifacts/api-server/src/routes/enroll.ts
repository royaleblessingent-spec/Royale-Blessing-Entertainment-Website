import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

router.post("/enroll", async (req, res) => {
  const { name, email, phone, age, program, message } = req.body as {
    name?: string;
    email?: string;
    phone?: string;
    age?: string;
    program?: string;
    message?: string;
  };

  if (!name || !email || !age || !program) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0D1A3A;color:#fff;border-radius:12px;">
      <div style="border-bottom:2px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
        <h1 style="color:#C9A84C;margin:0;font-size:24px;">New Enrollment Inquiry</h1>
        <p style="color:#aaa;margin:4px 0 0;font-size:14px;">RBE Performing Arts</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#aaa;width:140px;font-size:14px;">Name</td><td style="padding:8px 0;color:#fff;font-size:14px;font-weight:600;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C9A84C;font-size:14px;">${email}</a></td></tr>
        ${phone ? `<tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Phone</td><td style="padding:8px 0;color:#fff;font-size:14px;">${phone}</td></tr>` : ""}
        <tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Student Age</td><td style="padding:8px 0;color:#fff;font-size:14px;">${age}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Program</td><td style="padding:8px 0;color:#C9A84C;font-size:14px;font-weight:600;">${program}</td></tr>
        ${message ? `<tr><td style="padding:8px 0;color:#aaa;font-size:14px;vertical-align:top;">Notes</td><td style="padding:8px 0;color:#ddd;font-size:14px;">${message}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #333;font-size:12px;color:#666;">
        Reply directly to this email to reach ${name} at ${email}.
      </div>
    </div>
  `;

  try {
    // Resend integration via Replit Connectors — handles auth automatically
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "RBE Performing Arts <onboarding@resend.dev>",
        to: ["royaleblessingent@gmail.com"],
        reply_to: email,
        subject: `New Enrollment Inquiry — ${program} (${name})`,
        html,
      }),
    });

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      req.log.error({ errBody }, "Resend API error");
      res.status(500).json({ error: "Failed to send email. Please try again." });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Enroll route error");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
