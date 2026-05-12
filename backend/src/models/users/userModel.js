import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const emailService = {
  
  async sendOTPEmail(email, otp, userName) {
    const mailOptions = {
      from: `"Healify Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Healify Account Verification OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to Healify Hospital Management System</h2>
          <p>Dear <strong>${userName}</strong>,</p>
          <p>Your account has been created successfully.</p>
          
          <h1 style="color: #007bff; text-align: center; letter-spacing: 4px;">${otp}</h1>
          
          <p>This OTP will expire in <strong>10 minutes</strong>.</p>
          <p>Please use this OTP to verify your account.</p>
          
          <br>
          <p>Best Regards,<br>
          <strong>Healify Admin Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  },

  
  async sendResetPasswordEmail(email, resetToken, userName) {
    const mailOptions = {
      from: `"Healify Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Reset Your Healify Password',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Password Reset Request</h2>
          <p>Dear <strong>${userName}</strong>,</p>
          <p>You requested to reset your password.</p>
          
          <h1 style="color: #d32f2f; text-align: center; letter-spacing: 4px;">${resetToken}</h1>
          
          <p>This OTP will expire in <strong>15 minutes</strong>.</p>
          <p>If you did not request this, please ignore this email.</p>
          
          <br>
          <p>Best Regards,<br>
          <strong>Healify Admin Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  },

 
  async sendResendOTPEmail(email, otp, userName) {
    const mailOptions = {
      from: `"Healify Hospital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your New Healify Verification OTP',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Verification OTP Resent</h2>
          <p>Dear <strong>${userName}</strong>,</p>
          <p>Your new verification OTP is:</p>
          
          <h1 style="color: #007bff; text-align: center; letter-spacing: 4px;">${otp}</h1>
          
          <p>This OTP will expire in <strong>10 minutes</strong>.</p>
          
          <br>
          <p>Best Regards,<br>
          <strong>Healify Admin Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  },
};