class EmailService {
  async sendBookingNotification(bookingData) {
    const response = await fetch('https://api.unosend.com/v1/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.UNOSEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `🎉 New Booking from ${bookingData.businessName}`,
        html: `
          <h2>New Booking Request</h2>
          <p><strong>Business:</strong> ${bookingData.businessName}</p>
          <p><strong>Budget:</strong> ${bookingData.estimatedBudget}</p>
          <p>${bookingData.productIdea}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ UnoSend Error:', data);
      throw new Error('Email failed');
    }

    console.log('📨 Email sent via UnoSend:', data.id);
    return data;
  }
}

export default new EmailService();

