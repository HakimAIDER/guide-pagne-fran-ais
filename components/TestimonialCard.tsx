import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col h-full">
      <i className="fas fa-quote-left text-blue-500 text-2xl mb-4"></i>
      <p className="text-gray-700 italic mb-4 flex-grow">"{quote}"</p>
      <div className="mt-auto text-right border-t border-gray-200/60 pt-4">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
