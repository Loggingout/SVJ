import Booking from '../models/Booking.js';
import emailService from '../services/emailService.js';

export const createBooking = async (req, res) => {
  try {
    console.log('📩 Received booking request:', req.body);
    
    // Validate required fields
    const { businessName, productIdea, estimatedBudget } = req.body;
    
    if (!businessName || !productIdea || !estimatedBudget) {
      return res.status(400).json({ 
        error: 'Missing required fields: businessName, productIdea, and estimatedBudget are required' 
      });
    }
    
    // Save to database
    const booking = new Booking({
      businessName,
      productIdea,
      estimatedBudget
    });
    
    await booking.save();
    console.log('✅ Booking saved successfully:', booking._id);
    
    // Send email notification (don't wait for it)
    emailService.sendBookingNotification({
      businessName: booking.businessName,
      productIdea: booking.productIdea,
      estimatedBudget: booking.estimatedBudget,
      createdAt: booking.createdAt,
      _id: booking._id
    }).catch(error => {
      // Log email error but don't fail the request
      console.error('❌ Email notification failed:', error.message);
    });
    
    res.status(201).json({ 
      message: 'Booking submitted successfully', 
      booking 
    });
    
  } catch (error) {
    console.error('❌ Error creating booking:', error);
    res.status(500).json({ 
      error: 'Failed to create booking',
      details: error.message 
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    console.error('❌ Error fetching bookings:', error);
    res.status(500).json({ 
      error: 'Failed to fetch bookings',
      details: error.message 
    });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    
    res.json(booking);
  } catch (error) {
    console.error('❌ Error fetching booking:', error);
    res.status(500).json({ 
      error: 'Failed to fetch booking',
      details: error.message 
    });
  }
};