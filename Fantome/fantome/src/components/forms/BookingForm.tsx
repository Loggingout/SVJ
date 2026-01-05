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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      businessName: '',
      productIdea: '',
      estimatedBudget: ''
    });
    
    // Close modal if applicable
    if (onClose) {
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
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
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors h-32 resize-none text-white"
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
            className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-white"
            placeholder="$5,000 - $10,000"
            required
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 text-white"
        >
          Submit Request
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