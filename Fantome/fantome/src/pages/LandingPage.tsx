{/**FOOTER IS NEEDED WITH TERMS AND POLICY PAGES, BUSINESS EMAIL AND HOURS NEED TO BE DISPLAYED. */}
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Sparkles, Code, Palette, TrendingUp, Shield, Award, Zap } from 'lucide-react';
import BookingForm from '../components/forms/BookingForm';
import Navbar from '../components/header/Navbar';
import HeroImage from '../assets/Dashboard display (3).png'
import ServiceButton from '../components/buttons/ServicesButton';
 
const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Full-Page Hero Section */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar 
            onBookNow={() => setShowForm(true)} 
            onAboutUs={() => navigate('/about')}
            onRequestQuote={() => navigate('/request-quote')}
          />
        </div>

        {/* Centered Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-8">
          <div className="text-center max-w-5xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in]">
              We build fast, conversion-focused websites that help local businessess get more calls, leads, and customers.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Transform your vision into stunning web experiences that captivate and convert
            </p>
            <ServiceButton onClick={() => navigate('/services')} />
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <BookingForm 
          isModal={true}
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  );
};

export default LandingPage;