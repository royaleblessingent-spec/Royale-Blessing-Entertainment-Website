import { Router } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body as {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const subjectLabel: Record<string, string> = {
    script: "Script Submission",
    production: "Production Services",
    casting: "Casting",
    consulting: "Consulting",
    general: "General Inquiry",
  };

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0D1A3A;color:#fff;border-radius:12px;">
      <div style="border-bottom:2px solid #C9A84C;padding-bottom:16px;margin-bottom:24px;">
        <h1 style="color:#C9A84C;margin:0;font-size:24px;">New Contact Inquiry</h1>
        <p style="color:#aaa;margin:4px 0 0;font-size:14px;">Royale Blessing Entertainment</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#aaa;width:120px;font-size:14px;">Name</td><td style="padding:8px 0;color:#fff;font-size:14px;font-weight:600;">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#C9A84C;font-size:14px;">${email}</a></td></tr>
        ${subject ? `<tr><td style="padding:8px 0;color:#aaa;font-size:14px;">Subject</td><td style="padding:8px 0;color:#C9A84C;font-size:14px;font-weight:600;">${subjectLabel[subject] ?? subject}</td></tr>` : ""}
      </table>
      <div style="margin-top:16px;padding:16px;background:#0a1428;border-radius:8px;border-left:3px solid #C9A84C;">
        <p style="color:#aaa;font-size:12px;margin:0 0 8px;text-transform:uppercase;letter-spacing:.05em;">Message</p>
        <p style="color:#ddd;font-size:14px;margin:0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
      </div>
      <div style="margin-top:24px;padding-top:16px;border-top:1px solid #333;font-size:12px;color:#666;">
        Reply directly to this email to reach ${name} at ${email}.
      </div>
    </div>
  `;

  try {
    const connectors = new ReplitConnectors();
    const response = await connectors.proxy("resend", "/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "RBE Website <onboarding@resend.dev>",
        to: ["royaleblessingent@gmail.com"],
        reply_to: email,
        subject: `${subject ? `[${subjectLabel[subject] ?? subject}] ` : ""}New Message from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const errBody = await response.json().catch(() => ({}));
      req.log.error({ errBody }, "Resend API error");
      res.status(500).json({ error: "Failed to send message. Please try again." });
      return;
    }

    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Contact route error");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
