# Deploying Royale Blessing Entertainment to Netlify

This guide walks you through getting your site live on the internet — no technical experience required. Estimated time: 30–45 minutes.

---

## What You'll Need

- A free [Netlify account](https://netlify.com) (sign up with Google or email)
- A free [GitHub account](https://github.com) (sign up if you don't have one)
- Your Namecheap domain ready (e.g. `royaleblessingent.com`)
- Three environment variable values (see Step 3 below)

---

## Step 1 — Push the Code to GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** button in the top-right corner → **New repository**.
3. Name it `royale-blessing-entertainment` (or anything you like).
4. Leave it **Private**, then click **Create repository**.
5. Follow GitHub's instructions to push your existing code. In your terminal (or Replit shell):

```bash
git remote add origin https://github.com/YOUR_USERNAME/royale-blessing-entertainment.git
git branch -M main
git push -u origin main
```

---

## Step 2 — Connect Netlify to GitHub

1. Go to [netlify.com](https://netlify.com) and sign in.
2. Click **Add new site** → **Import an existing project**.
3. Choose **Deploy with GitHub** and authorize Netlify to access your repos.
4. Select the `royale-blessing-entertainment` repository.
5. Netlify will auto-detect the settings from `netlify.toml`:
   - **Build command:** `pnpm --filter @workspace/royale-blessing run build`
   - **Publish directory:** `artifacts/royale-blessing/dist/public`
   - **Functions directory:** `netlify/functions`
6. **Do not click Deploy yet** — set your environment variables first (Step 3).

---

## Step 3 — Set Environment Variables

In Netlify, go to **Site settings** → **Environment variables** → **Add a variable**. Add these three:

| Variable | Value | What it does |
|---|---|---|
| `RESEND_API_KEY` | Your Resend API key | Sends email notifications from contact & enrollment forms |
| `NOTIFY_EMAIL` | `royaleblessingent@gmail.com` | The email address that receives form submissions |
| `DATABASE_URL` | Your PostgreSQL connection string | Stores form submissions in the database |

### Getting your Resend API key
1. Go to [resend.com](https://resend.com) and create a free account.
2. In the dashboard, click **API Keys** → **Create API Key**.
3. Copy the key and paste it as the value for `RESEND_API_KEY`.
4. **Important:** To send from your own domain (not `onboarding@resend.dev`), you'll need to verify a domain in Resend under **Domains**. Until then, emails will come from `onboarding@resend.dev` but will still be delivered to your `NOTIFY_EMAIL`.

### Getting a PostgreSQL database
You can use any PostgreSQL provider. A free option is [Neon](https://neon.tech):
1. Sign up at [neon.tech](https://neon.tech).
2. Create a new project → copy the **Connection string** (it starts with `postgresql://...`).
3. Paste it as the value for `DATABASE_URL`.
4. Run the database schema push once (see **Schema Setup** below).

### Schema Setup (one-time)
After setting `DATABASE_URL`, run this command in your terminal to create the database tables:

```bash
pnpm --filter @workspace/db run push
```

---

## Step 4 — Deploy

1. Back in Netlify, click **Deploy site**.
2. Wait 2–3 minutes for the build to complete.
3. Netlify will give you a temporary URL like `https://festive-panda-abc123.netlify.app`.
4. Visit it to confirm your site is live and the forms work!

---

## Step 5 — Connect Your Namecheap Domain

### In Netlify
1. Go to **Site settings** → **Domain management** → **Add a domain**.
2. Type your domain (e.g. `royaleblessingent.com`) and click **Verify**.
3. Netlify will show you **4 nameservers** — they look like:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
   Copy all four.

### In Namecheap
1. Log in to [namecheap.com](https://namecheap.com).
2. Go to **Domain List** → click **Manage** next to your domain.
3. Under **Nameservers**, choose **Custom DNS** from the dropdown.
4. Paste in the four Netlify nameservers and click the checkmark to save.

### Wait for DNS to propagate
DNS changes can take anywhere from a few minutes to 48 hours. Once it's done, your domain will point to your Netlify site. Netlify automatically provisions a free SSL certificate (the padlock in the browser).

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Build fails | Check Netlify's **Deploy log** for errors. Most common cause: a missing environment variable. |
| Forms don't send email | Verify `RESEND_API_KEY` and `NOTIFY_EMAIL` are set correctly in Netlify's env vars. |
| Site shows old content | Go to **Deploys** in Netlify and click **Trigger deploy** → **Deploy site**. |
| Domain not working after 48h | Double-check the nameservers in Namecheap exactly match what Netlify gave you. |
| Database errors | Make sure `DATABASE_URL` is correct and you've run `pnpm --filter @workspace/db run push`. |

---

## After You're Live

- **Future updates:** Push changes to GitHub and Netlify auto-deploys within minutes.
- **View form submissions:** Log into your database (Neon dashboard or any PostgreSQL viewer) and check the `contact_submissions` and `enrollment_submissions` tables.
- **Custom from-email:** Verify your domain in Resend to send emails from `hello@royaleblessingent.com` instead of the default address.

---

*Built with React, Vite, Tailwind CSS, and Netlify Functions.*
*For technical questions, contact your developer.*
