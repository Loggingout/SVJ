import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

class EmailService {
  async sendEmail({ to, subject, html }) {
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
      console.error('❌ SendGrid API key or FROM email is missing!');
      throw new Error('Email configuration missing');
    }

    const msg = {
      to,
      from: process.env.EMAIL_FROM, // Verified sender
      subject,
      html,
    };

    try {
      await sgMail.send(msg);
      console.log(`📨 Email sent via SendGrid to ${to}`);
    } catch (err) {
      console.error('❌ SendGrid email failed:', err.response?.body || err.message);
      throw err;
    }
  }

  // =========================
  // BOOKING (ADMIN)
  // =========================
  async sendBookingNotification(bookingData) {
    return this.sendEmail({
      to: process.env.EMAIL_TO, // Admin email
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

  // =========================
  // REQUEST QUOTE (ADMIN)
  // =========================
  async sendQuoteNotification(quoteData) {
    return this.sendEmail({
      to: process.env.EMAIL_TO, // Admin
      subject: '🚀 New Quote Request',
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

  // =========================
  // REQUEST QUOTE (CLIENT)
  // =========================
  async sendQuoteConfirmation(quoteData) {
    if (!quoteData.email) {
      console.warn('Client email missing, skipping confirmation');
      return;
    }

    return this.sendEmail({
      to: quoteData.email,
      subject: 'We received your quote request 👋',
      html: `
        <h2>Thanks for reaching out, ${quoteData.name}!</h2>
        <p>We've received your request for a <strong>${quoteData.websiteType}</strong>.</p>
        <p><strong>Estimated Cost:</strong> $${quoteData.estimatedPrice}</p>
        <p>We'll review your project and get back to you within 24 hours.</p>
        <br />
        <p>— Fantome Technologies</p>
      `,
    });
  }
}

export default new EmailService();
