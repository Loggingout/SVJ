import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BookingFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

const BookingForm = ({ onClose, isModal = false }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    businessName: '',
    productIdea: '',
    estimatedBudget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.businessName || !formData.productIdea || !formData.estimatedBudget) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://fantome-technologies.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      const result = await response.json();
      console.log('Booking submitted successfully:', result);
      
      // Show success message
      setSuccess(true);
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          businessName: '',
          productIdea: '',
          estimatedBudget: ''
        });
        setSuccess(false);
        
        // Close modal if applicable
        if (onClose) {
          onClose();
        }
      }, 2000);

    } catch (err) {
      console.error('Error submitting booking:', err);
      setError('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const formContent = (
    <div className={`bg-gradient-to-br from-slate-900 to-purple-900 p-8 rounded-2xl ${isModal ? 'border border-purple-500/30 shadow-2xl' : ''}`}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-400" />
          <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Build Together
          </h3>
        </div>
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-2xl"
            aria-label="Close form"
          >
            ×
          </button>
        )}
      </div>
      
      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
          ✓ Booking submitted successfully!
        </div>
      )}
      
      <div className="space-y-5">
        <div>
          <label htmlFor="businessName" className="block text-sm font-semibold mb-2 text-purple-300">
            Business Name *
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={formData.businessName}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Your business name"
            required
          />
        </div>
        
        <div>
          <label htmlFor="productIdea" className="block text-sm font-semibold mb-2 text-purple-300">
            Product Idea *
          </label>
          <textarea
            id="productIdea"
            name="productIdea"
            value={formData.productIdea}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors h-32 resize-none text-white disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="Tell us about your project vision"
            required
          />
        </div>
        
        <div>
          <label htmlFor="estimatedBudget" className="block text-sm font-semibold mb-2 text-purple-300">
            Estimated Budget *
          </label>
          <input
            id="estimatedBudget"
            name="estimatedBudget"
            type="text"
            value={formData.estimatedBudget}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="$5,000 - $10,000"
            required
          />
        </div>
        
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {formContent}
        </div>
      </div>
    );
  }

  return formContent;
};

export default BookingForm;