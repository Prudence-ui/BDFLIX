require("dotenv").config();
const express = require("express");
const path = require("path");
const { Resend } = require("resend");
const compression = require("compression");
app.use(compression());


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  try {
    const { email, message } = req.body;

    const response = await resend.emails.send({
      from: "BDflix <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL,
      subject: "📨 Nouveau message BDflix",
      html: `
        <p><strong>Email :</strong> ${email}</p>
        <p>${message}</p>
      `
    });

    console.log("✅ Resend response:", response);

    res.json({ success: true });

  } catch (err) {
    console.error("❌ Resend FULL error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
