require("dotenv").config();

const express = require("express");
const path = require("path");
const compression = require("compression");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 3000;

/* ⚡ compression = chargement rapide */
app.use(compression());

/* 📦 json */
app.use(express.json());

/* 📁 public folder */
app.use(express.static(path.join(__dirname, "public")));

/* ✉️ resend */
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { email, message } = req.body;

  try {
    await resend.emails.send({
      from: "BDflix <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: "📩 Nouveau message BDflix",
      html: `
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});
