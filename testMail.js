const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

async function sendTestMail() {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Email",
      text: "If you get this, nodemailer works!"
    });

    console.log("EMAIL SENT SUCCESS:", info.response);
  } catch (err) {
    console.log("EMAIL FAILED ❌");
    console.log(err);
  }
}

sendTestMail();