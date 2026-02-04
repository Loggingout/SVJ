import fetch from "node-fetch";

class EmailService {
  async sendEmail({ to, subject, html }) {
    const response = await fetch("https://api.unosend.com/v1/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.UNOSEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM,
        to,
        subject,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ UnoSend Error:", data);
      throw new Error("Email failed");
    }

    console.log("📨 Email sent via UnoSend:", data.id);
    return data;
  }

  /* =========================
     BOOKING (ADMIN)
  ========================== */
  async sendBookingNotification(bookingData) {
    return this.sendEmail({
      to: process.env.EMAIL_TO,
      subject: `📅 New Booking from ${bookingData.name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${bookingData.name}</p>
        <p><strong>Email:</strong> ${bookingData.email}</p>
        <p><strong>Service:</strong> ${bookingData.service}</p>
        <p><strong>Date:</strong> ${bookingData.date}</p>
      `,
    });
  }

  /* =========================
     REQUEST QUOTE (ADMIN)
  ========================== */
  async sendQuoteNotification(quoteData) {
    return this.sendEmail({
      to: process.env.EMAIL_TO,
      subject: "🚀 New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${quoteData.name}</p>
        <p><strong>Email:</strong> ${quoteData.email}</p>
        <p><strong>Website Type:</strong> ${quoteData.websiteType}</p>
        <p><strong>Pages:</strong> ${quoteData.pages}</p>
        <p><strong>Estimated Price:</strong> $${quoteData.estimatedPrice}</p>
      `,
    });
  }

  /* =========================
     REQUEST QUOTE (CLIENT)
  ========================== */
  async sendQuoteConfirmation(quoteData) {
    return this.sendEmail({
      to: quoteData.email,
      subject: "We received your quote request 👋",
      html: `
        <h2>Thanks for reaching out, ${quoteData.name}!</h2>
        <p>We've received your request for a <strong>${quoteData.websiteType}</strong>.</p>
        <p><strong>Estimated Cost:</strong> $${quoteData.estimatedPrice}</p>
        <p>I'll review your project and get back to you within 24 hours.</p>
        <br />
        <p>— Fantome Technologies</p>
      `,
    });
  }
}

export default new EmailService();
