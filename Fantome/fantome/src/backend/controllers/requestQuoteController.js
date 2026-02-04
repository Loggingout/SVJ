import EmailService from "../services/emailService.js";

export const requestQuote = async (req, res) => {
  try {
    const { name, email, websiteType, pages, estimatedPrice } = req.body;

    if (!name || !email || !websiteType || !pages || !estimatedPrice) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Admin email
    await EmailService.sendQuoteNotification({
      name,
      email,
      websiteType,
      pages,
      estimatedPrice,
    });

    // Client confirmation
    await EmailService.sendQuoteConfirmation({
      name,
      email,
      websiteType,
      estimatedPrice,
    });

    res.status(200).json({ message: "Quote request submitted successfully" });
  } catch (error) {
    console.error("Request Quote Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};
