import Navbar from "../components/header/Navbar";
import ReturnHomeButton from "../components/buttons/ReturnHomeButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StudioImg from "../assets/FT Studio.png";
import CompanyTeam from "../assets/FTCompanyTeam.png";
import { Building2, Code2, Users, MapPin, Calendar } from "lucide-react";

export default function AboutUsPage() {
  const navigate = useNavigate();
  const [showReturnHome, setShowReturnHome] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowReturnHome(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <Navbar onBookNow={() => {}} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-purple-600">Fantome Technologies</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A modern web development studio focused on building high-quality,
          performance-driven digital experiences.
        </p>
      </section>

      {/* Company Info Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Building2 className="w-8 h-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">What We Do</h3>
              <p className="text-gray-600">
                Fantome Technologies specializes in professional website
                development, sleek landing pages, and full website redesigns
                tailored to modern businesses.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="w-8 h-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Founded</h3>
              <p className="text-gray-600">
                Opened in <strong>December 2025</strong> with a focus on clean
                design, strong branding, and scalable architecture.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Team</h3>
              <p className="text-gray-600">
                Currently a one-developer studio, ensuring direct communication,
                fast iteration, and high attention to detail on every project.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-8 h-8 text-purple-600 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">
                Based in the <strong>Mid-West, Colorado</strong>, serving
                clients locally and nationwide.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-96 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
          <img
            src={StudioImg}
            alt="Fantome Technologies Studio"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            className="relative p-8 rounded-2xl shadow-sm bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 
                    hover:ring-4 hover:ring-purple-600 transition-all duration-300"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              1
            </span>
            <Code2 className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Clean Code
            </h4>
            <p className="text-gray-200">
              Built with modern frameworks and best practices for performance,
              maintainability, and scalability.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="relative p-8 rounded-2xl shadow-sm bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 
                    hover:ring-4 hover:ring-purple-600 transition-all duration-300"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              2
            </span>
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Client-Focused
            </h4>
            <p className="text-gray-200">
              Every project is handled with direct collaboration and transparent
              communication.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="relative p-8 rounded-2xl shadow-sm bg-gradient-to-br from-gray-900 via-gray-700 to-gray-400 
                    hover:ring-4 hover:ring-purple-600 transition-all duration-300"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              3
            </span>
            <Building2 className="w-10 h-10 text-purple-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Built to Grow
            </h4>
            <p className="text-gray-200">
              Websites designed to evolve as your business grows — not rebuilt
              from scratch.
            </p>
          </div>
        </div>
      </section>

      {/* Extra Image Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative w-full h-80 md:h-[28rem] overflow-hidden rounded-2xl">
          {/* Image */}
          <img
            src={CompanyTeam}
            alt="Fantome Technologies Team"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 focus:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center top-100">
            <p className="text-white text-lg sm:text-xl md:text-2xl text-center px-4 font-semibold">
              "Pictures of our future team"
            </p>
          </div>
        </div>
      </section>

      {/* Return Home Button */}
      {showReturnHome && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <ReturnHomeButton onClick={() => navigate("/")} />
        </div>
      )}
    </div>
  );
}
