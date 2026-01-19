import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });

console.log('MONGODB_URI exists?', process.env.MONGODB_URI ? 'YES ✓' : 'NO ✗');

const app = express();

// CORS Configuration - MUST BE BEFORE OTHER MIDDLEWARE
const allowedOrigins = [
  'https://congenial-broccoli-jjrv5pxpv565c57w7-5173.app.github.dev', // Codespace frontend
  'https://fantometechnologies.com', // Replace with your actual domain
  'https://fantometechnologies.vercel.app/', // If you use www
  'http://localhost:5173', // Local development
  'http://localhost:3000', // Alternative local port
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('❌ Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200
}));

app.use(express.json());

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - Origin: ${req.headers.origin || 'no origin'}`);
  next();
});

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
  console.error('❌ ERROR: MONGODB_URI is not defined in .env file');
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('✓ MongoDB Connected Successfully'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });

// Schema
const bookingSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  productIdea: { type: String, required: true },
  estimatedBudget: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// Routes
app.post('/api/bookings', async (req, res) => {
  try {
    console.log('📩 Received booking request:', req.body);
    const booking = new Booking({
      businessName: req.body.businessName,
      productIdea: req.body.productIdea,
      estimatedBudget: req.body.estimatedBudget
    });
    await booking.save();
    console.log('✅ Booking saved successfully:', booking);
    res.status(201).json({ message: 'Booking submitted successfully', booking });
  } catch (error) {
    console.error('❌ Error saving booking:', error);
    res.status(400).json({ error: error.message });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.json({ message: 'Fantome Technologies API Server', cors: 'enabled' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✓ Server running on port ${PORT}`);
  console.log(`✓ Listening on 0.0.0.0:${PORT}`);
  console.log(`✓ CORS enabled for origins:`, allowedOrigins);
});