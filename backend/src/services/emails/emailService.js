import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use SendGrid, Brevo, etc. later
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const emailService = {
  async sendOTPEmail(email, otp, userName) {
    const mailOptions = {
      from: `"Healify Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Healify Account Verification OTP',
      html: `
        <h2>Welcome to Healify Hospital Management System</h2>
        <p>Dear ${userName},</p>
        <p>Your account has been created successfully.</p>
        <h1 style="color: #007bff;">${otp}</h1>
        <p>This OTP will expire in <strong>10 minutes</strong>.</p>
        <p>Use this OTP to verify your account.</p>
        <br>
        <p>Best Regards,<br>Healify Admin Team</p>
      `
    };

    await transporter.sendMail(mailOptions);
  }
};