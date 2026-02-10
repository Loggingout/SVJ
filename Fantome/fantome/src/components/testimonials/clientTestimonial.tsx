import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  logo: string;      // Path to client logo
  name: string;      // Client name
  comment: string;   // Client testimonial
}

interface ClientTestimonialProps {
  testimonials?: Testimonial[];
}

export default function ClientTestimonial({
  testimonials = [],
}: ClientTestimonialProps) {
  if (testimonials.length === 0) {
    return (
      <div className="text-center text-gray-400 py-16">
        No client testimonials available
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-shadow-md">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center p-8 md:p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            {/* Top Quote Icon */}
            <Quote className="absolute top-4 left-4 h-6 w-6 text-gray-300" />

            <img
              src={t.logo}
              alt={`${t.name} logo`}
              className="h-20 w-20 md:h-24 md:w-24 object-contain mb-6"
            />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{t.name}</h3>
            <div className="bg-gradient-to-r from-gray-200/20 to-gray-300/20 p-6 md:p-8 rounded-xl text-gray-700 text-center text-sm md:text-base relative">
              {/* Bottom Quote Icon */}
              <Quote className="absolute bottom-4 right-4 h-6 w-6 text-gray-300 rotate-180" />
              {t.comment}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
