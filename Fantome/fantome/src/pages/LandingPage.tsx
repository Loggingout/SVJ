import { useState } from 'react';
import { Sparkles, Code, Palette, TrendingUp, Shield, Award, Zap } from 'lucide-react';

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <nav className="relative z-10 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Fantome Technologies
            </span>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Book Now
          </button>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-[fadeIn_1s_ease-in]">
            Build Your Digital Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your vision into stunning web experiences that captivate and convert
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-4 bg-white text-purple-900 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            Let's Build Together
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Code className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Modern Website Development</h3>
            <p className="text-gray-300">
              Cutting-edge web applications built with the latest technologies for optimal performance and user experience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <Zap className="w-12 h-12 text-pink-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Sleek Landing Pages</h3>
            <p className="text-gray-300">
              High-converting landing pages designed to capture attention and drive action from your audience.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <Palette className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Website Design Overhauls</h3>
            <p className="text-gray-300">
              Breathe new life into your existing website with a complete design transformation that elevates your brand.
            </p>
          </div>
        </div>

        {/* Management Tiers */}
        <h3 className="text-4xl font-bold text-center mb-12 mt-24">Website Management</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-500/20 hover:border-gray-400/50 transition-all duration-300 hover:scale-105">
            <Shield className="w-10 h-10 text-gray-400 mb-4" />
            <h4 className="text-2xl font-bold mb-2">Silver</h4>
            <p className="text-4xl font-bold mb-4">$30<span className="text-lg text-gray-400">/month</span></p>
            <p className="text-gray-300 mb-4">3 months of professional website management and maintenance</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/50 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:scale-105 shadow-xl shadow-yellow-500/10 relative">
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-1 rounded-full text-sm font-bold">
              POPULAR
            </div>
            <Award className="w-10 h-10 text-yellow-400 mb-4" />
            <h4 className="text-2xl font-bold mb-2">Gold</h4>
            <p className="text-4xl font-bold mb-4">$60<span className="text-lg text-gray-400">/month</span></p>
            <p className="text-gray-300 mb-4">6 months of comprehensive website management with priority support</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/10">
            <Sparkles className="w-10 h-10 text-purple-400 mb-4" />
            <h4 className="text-2xl font-bold mb-2">Platinum</h4>
            <p className="text-4xl font-bold mb-4">$80<span className="text-lg text-gray-400">/month</span></p>
            <p className="text-gray-300 mb-4">1 year of premium website management with dedicated support</p>
          </div>
        </div>

        {/* Traffic Enhancement */}
        <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-sm p-12 rounded-2xl border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <TrendingUp className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-3xl font-bold mb-3">Website Traffic Enhancement</h3>
              <p className="text-gray-300 text-lg">
                Boost your online visibility and drive qualified traffic to your website with our proven strategies
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                $250
              </p>
              <p className="text-gray-400 text-lg">/month</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative web solutions
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-purple-900 p-8 rounded-2xl max-w-md w-full border border-purple-500/30 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Build Together
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-white transition-colors text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-300">Business Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your business name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-300">Product Idea</label>
                <textarea
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors h-32 resize-none"
                  placeholder="Tell us about your project vision"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-300">Estimated Budget</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="$5,000 - $10,000"
                />
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Form submission logic will go here
                }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;