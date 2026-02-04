import Mailgun from "mailgun.js";
import FormData from "form-data";

class EmailService {
  constructor() {
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      console.error(
        "❌ Mailgun API key or domain is missing! Check your .env"
      );
    }

    this.mailgun = new Mailgun(FormData);
    this.mg = this.mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
      // url: "https://api.eu.mailgun.net", // uncomment if using EU domain
    });
  }

  // =========================
  // Generic send email
  // =========================
  async sendEmail({ to, subject, text, html, from }) {
    try {
      const domain = process.env.MAILGUN_DOMAIN;
      if (!domain) throw new Error("Mailgun domain not set in .env");

      const data = await this.mg.messages.create(domain, {
        from: from || process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html,
      });

      console.log("📨 Mailgun email sent:", data);
      return data;
    } catch (err) {
      console.error("❌ Mailgun email failed:", err);
      throw err;
    }
  }

  // =========================
  // Booking notification (admin)
  // =========================
  async sendBookingNotification({ name, email, service, date }) {
    return this.sendEmail({
      to: process.env.EMAIL_TO,
      subject: `📅 New Booking from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
      `,
    });
  }

  // =========================
  // Request Quote notification (admin)
  // =========================
  async sendQuoteNotification({ name, email, websiteType, pages, estimatedPrice }) {
    return this.sendEmail({
      to: process.env.EMAIL_TO,
      subject: "🚀 New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website Type:</strong> ${websiteType}</p>
        <p><strong>Pages:</strong> ${pages}</p>
        <p><strong>Estimated Price:</strong> $${estimatedPrice}</p>
      `,
    });
  }

  // =========================
  // Request Quote confirmation (client)
  // =========================
  async sendQuoteConfirmation({ name, email, websiteType, estimatedPrice }) {
    if (!email) return;
    return this.sendEmail({
      to: email,
      subject: "We received your quote request 👋",
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We've received your request for a <strong>${websiteType}</strong>.</p>
        <p><strong>Estimated Cost:</strong> $${estimatedPrice}</p>
        <p>We'll review your project and get back to you within 24 hours.</p>
        <br />
        <p>— Fantome Technologies</p>
      `,
    });
  }

  // =========================
  // Test Mailgun email
  // =========================
  async sendSimpleMessage() {
    const domain = process.env.MAILGUN_DOMAIN;
    if (!domain) throw new Error("Mailgun domain not set in .env");

    return this.sendEmail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Test Email from Mailgun",
      text: "This is a test email to confirm Mailgun setup.",
      html: "<strong>This is a test email to confirm Mailgun setup.</strong>",
    });
  }
}

export default new EmailService();
