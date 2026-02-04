import { Resend } from "resend";

class EmailService {
  constructor() {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Resend API key is missing in .env");
    }

    this.resend = new Resend(process.env.RESEND_API_KEY);
    this.from = "Fantome Technologies <onboarding@resend.dev>";
  }

  async sendEmail({ to, subject, html }) {
    const { data, error } = await this.resend.emails.send({
      from: this.from,
      to,
      subject,
      html,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      throw error;
    }

    console.log("📨 Email sent. ID:", data.id);
    return data;
  }

  async sendQuoteNotification(payload) {
    return this.sendEmail({
      to: "someonetothinkabout@gmail.com",
      subject: "📩 New Quote Request",
      html: `
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Website Type:</strong> ${payload.websiteType}</p>
        <p><strong>Pages:</strong> ${payload.pages}</p>
        <p><strong>Estimate:</strong> $${payload.estimatedPrice}</p>
      `,
    });
  }

  async sendQuoteConfirmation(payload) {
    return this.sendEmail({
      to: payload.email,
      subject: "We received your quote request 🚀",
      html: `
        <p>Hey ${payload.name},</p>
        <p>Thanks for reaching out! We’ve received your quote request and will be in touch shortly.</p>
        <p><strong>Estimated price:</strong> $${payload.estimatedPrice}</p>
        <p>– Fantome Technologies</p>
      `,
    });
  }
}

// 👇 THIS is the key line
export default new EmailService();
