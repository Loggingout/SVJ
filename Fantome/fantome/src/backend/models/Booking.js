import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  productIdea: { type: String, required: true },
  estimatedBudget: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);