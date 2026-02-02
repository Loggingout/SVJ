import Navbar from "../components/header/Navbar";
import RequestQuoteForm from "../components/forms/RequestQuoteForm";
import ReturnHomeButton from "../components/buttons/ReturnHomeButton";
import BookingForm from "../components/forms/BookingForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RequestQuotePage() {
  const navigate = useNavigate();
  const [showReturnHome, setShowReturnHome] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 200;

      setShowReturnHome(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onBookNow={() => setShowForm(true)}
        onAboutUs={() => navigate("/about")}
        onRequestQuote={() => navigate("/request-quote")}
      />

      <div className="max-w-3xl mx-auto px-6 py-24 ">
        <RequestQuoteForm />
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <BookingForm isModal={true} onClose={() => setShowForm(false)} />
      )}

      {/* Return Home Button */}
      {showReturnHome && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <ReturnHomeButton onClick={() => navigate("/")} />
        </div>
      )}
    </div>
  );
}
