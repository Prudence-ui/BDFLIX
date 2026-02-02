require("dotenv").config();
const express = require("express");
const path = require("path");
const { Resend } = require("resend");
require("dotenv").config();

const express = require("express");
const path = require("path");
const compression = require("compression");
const { Resend } = require("resend");

const app = express(); // ✅ on initialise AVANT tout

const PORT = process.env.PORT || 3000;

/* 🚀 Optimisation vitesse */
app.use(compression());

/* 📦 JSON */
app.use(express.json());

/* 📁 fichiers publics */
app.use(express.static(path.join(__dirname, "public")));

/* ✉️ RESEND */
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "BDflix <onboarding@resend.dev>",
      to: process.env.EMAIL_TO,
      subject: "📩 Nouveau message BDflix",
      html: `
        <p><strong>Email :</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    console.log("✅ Resend:", response);

    res.json({ success: true });

  } catch (err) {
    console.error("❌ Resend error:", err);
    res.json({ success: false });
  }
});

/* 🌍 Serveur */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
