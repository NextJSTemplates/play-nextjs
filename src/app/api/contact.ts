import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { fullName, email, phone, message } = req.body;

    // Create a Nodemailer transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: "Gmail", // e.g., Gmail, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "speechdata@ug.edu.gh", // Your email address to receive the messages
      subject: `New message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send message. Please try again." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}