import nodemailer from 'nodemailer';

class EmailService {
  constructor() {
    this.transporter = null;
  }

  // Lazy initialization - only create transporter when first needed
  getTransporter() {
    if (this.transporter) {
      return this.transporter;
    }

    // Check if credentials exist
    console.log('🔍 Initializing email transporter...');
    console.log('🔍 EMAIL_USER:', process.env.EMAIL_USER ? '✓ Loaded' : '✗ Missing');
    console.log('🔍 EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Loaded (hidden)' : '✗ Missing');
    console.log('🔍 EMAIL_TO:', process.env.EMAIL_TO ? '✓ Loaded' : '✗ Missing');
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email credentials are missing! Email service will not work.');
      return null;
    }

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify email configuration
    this.transporter.verify((error, success) => {
      if (error) {
        console.error('❌ Email configuration error:', error);
      } else {
        console.log('✅ Email service is ready to send emails');
      }
    });

    return this.transporter;
  }

  async sendBookingNotification(bookingData) {
    const transporter = this.getTransporter();
    
    if (!transporter) {
      console.error('❌ Cannot send email: transporter not initialized');
      throw new Error('Email service not configured');
    }

    const mailOptions = {
      from: `"Fantome Technologies" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🎉 New Booking Request from ${bookingData.businessName}`,
      html: this.generateEmailTemplate(bookingData)
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('❌ Error sending email:', error);
      throw error;
    }
  }

  generateEmailTemplate(bookingData) {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px;">New Booking Request</h1>
        </div>
        
        <div style="padding: 30px; background-color: #f9fafb;">
          <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h2 style="color: #9333ea; margin-top: 0; border-bottom: 2px solid #9333ea; padding-bottom: 10px;">
              Client Information
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #374151;">Business Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #1f2937;">
                  ${bookingData.businessName}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                  <strong style="color: #374151;">Estimated Budget:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; text-align: right; color: #1f2937;">
                  ${bookingData.estimatedBudget}
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #9333ea; margin-top: 0;">Product Idea</h3>
            <p style="color: #1f2937; line-height: 1.8; background-color: #f9fafb; padding: 20px; border-radius: 8px; border-left: 4px solid #9333ea;">
              ${bookingData.productIdea}
            </p>
          </div>
        </div>
        
        <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            <strong>Submitted:</strong> ${new Date(bookingData.createdAt).toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
          <p style="color: #9ca3af; font-size: 11px; margin: 5px 0;">
            Booking ID: ${bookingData._id}
          </p>
        </div>
      </div>
    `;
  }
}

export default new EmailService();