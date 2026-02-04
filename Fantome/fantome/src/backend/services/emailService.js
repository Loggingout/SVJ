import { Resend } from "resend";

class EmailService {
  from = process.env.EMAIL_FROM || "onboarding@resend.dev";
  resend;

  // Lazy init Resend
  getResend() {
    if (!this.resend) {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("Resend API key is missing in .env");
      }
      this.resend = new Resend(process.env.RESEND_API_KEY);
    }
    return this.resend;
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

  async sendQuoteNotification({
    name,
    email,
    websiteType,
    pages,
    estimatedPrice,
  }) {
    return this.sendEmail({
      to: process.env.EMAIL_TO,
      subject: "🚀 New Quote Request",
      html: `
        <h2>New Quote Request 🆕</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website Type:</strong> ${websiteType}</p>
        <p><strong>Pages:</strong> ${pages}</p>
        <p><strong>Estimated Price:</strong> $${estimatedPrice}</p>
      `,
    });
  }

  async sendQuoteConfirmation({ name, email, websiteType, estimatedPrice }) {
    return this.sendEmail({
      to: email,
      subject: "We received your quote request 👋",
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We've received your request for a <strong>${websiteType}</strong>.</p>
        <p><strong>Estimated Cost:</strong> $${estimatedPrice}</p>
        <p>We'll review your project and get back to you within 24 hours.</p>
        <br/>
        <p>— Fantome Technologies</p>
      `,
    });
  }
}

// Export instance directly, safe for import even if API key is missing
export default new EmailService();
