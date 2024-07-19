import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});
