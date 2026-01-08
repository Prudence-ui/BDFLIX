require('dotenv').config();
const express = require('express');
const axios = require('axios');
const nodemailer = require('nodemailer');


const app = express();
app.use(express.json());
app.use(express.static('public'));


app.post('/payer', async (req, res) => {
const { email } = req.body;

const response = await axios.post(
'https://api.fedapay.com/v1/transactions',
{
description: 'Chapitre BD complet',
amount: 1500,
currency: 'XOF',
callback_url: `${process.env.SITE_URL}/success.html`,
customer: { email }
},
{
headers: { Authorization: `Bearer ${process.env.FEDAPAY_API_KEY}` }
}
);

res.json({ url: response.data.transaction.payment_url });
});


app.post('/envoyer', async (req, res) => {
const { email } = req.body;


const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
}
});

await transporter.sendMail({
to: email,
subject: 'Vos chapitres BD',
text: 'Merci pour votre achat. Voici vos chapitres PDF.',
attachments: [
{ path: './pdf/bd1/chapitre2.pdf' },
{ path: './pdf/bd1/chapitre3.pdf' }
]
});


res.sendStatus(200);
});


app.listen(3000, () => {
console.log('Serveur lancé : http://localhost:3000');
});