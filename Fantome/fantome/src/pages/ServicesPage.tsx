import Navbar from "../components/header/Navbar";
import ReturnHomeButton from "../components/buttons/ReturnHomeButton";
import BookingForm from "../components/forms/BookingForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Code,
  Palette,
  TrendingUp,
  Shield,
  Award,
  Zap,
  Sparkles,
} from "lucide-react";

export default function ServicesPage() {
  const navigate = useNavigate();
  const [showReturnHome, setShowReturnHome] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowReturnHome(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onBookNow={() => setShowForm(true)}
        onAboutUs={() => navigate("/about")}
      />

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Code className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Modern Website Development
            </h3>
            <p className="text-gray-600">
              Cutting-edge web applications built with the latest technologies
              for optimal performance and user experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl border border-pink-200 hover:border-pink-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <Zap className="w-12 h-12 text-pink-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Sleek Landing Pages
            </h3>
            <p className="text-gray-600">
              High-converting landing pages designed to capture attention and
              drive action from your audience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Palette className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Website Design Overhauls
            </h3>
            <p className="text-gray-600">
              Breathe new life into your existing website with a complete design
              transformation that elevates your brand.
            </p>
          </div>
        </div>

        {/* Management Tiers */}
        <h3 className="text-4xl font-bold text-center mb-12 mt-24 text-gray-900">
          Website Management
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <Shield className="w-10 h-10 text-gray-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2 text-gray-900">Silver</h4>
            <p className="text-4xl font-bold mb-4 text-gray-900">
              $30<span className="text-lg text-gray-500">/month</span>
            </p>
            <p className="text-gray-600 mb-4">
              3 months of professional website management and maintenance
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-300 hover:border-yellow-400 transition-all duration-300 hover:scale-105 shadow-xl shadow-yellow-500/10 relative">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-1 rounded-full text-sm font-bold text-white">
              POPULAR
            </div>
            <Award className="w-10 h-10 text-yellow-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2 text-gray-900">Gold</h4>
            <p className="text-4xl font-bold mb-4 text-gray-900">
              $60<span className="text-lg text-gray-500">/month</span>
            </p>
            <p className="text-gray-600 mb-4">
              6 months of comprehensive website management with priority support
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-300 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/10">
            <Sparkles className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-2xl font-bold mb-2 text-gray-900">Platinum</h4>
            <p className="text-4xl font-bold mb-4 text-gray-900">
              $80<span className="text-lg text-gray-500">/month</span>
            </p>
            <p className="text-gray-600 mb-4">
              1 year of premium website management with dedicated support
            </p>
          </div>
        </div>

        {/* Traffic Enhancement */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-12 rounded-2xl border border-pink-300 hover:border-pink-400 transition-all duration-300 hover:shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-gray-900">
                Website Traffic Enhancement
              </h3>
              <p className="text-gray-600 text-lg">
                Boost your online visibility and drive qualified traffic to your
                website with our proven strategies
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                $250
              </p>
              <p className="text-gray-500 text-lg">/month</p>
            </div>
          </div>
        </div>
      </div>

      {/*Footer*/}

      {/* Return Home Button */}
      {showReturnHome && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <ReturnHomeButton onClick={() => navigate("/")} />
        </div>
      )}
    </div>
  );
}
