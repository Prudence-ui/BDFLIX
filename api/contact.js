import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ success:false });
  }

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

    res.status(200).json({ success:true });

  } catch (err) {

    console.error(err);
    res.status(500).json({ success:false });

  }

}