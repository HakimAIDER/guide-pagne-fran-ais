import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start"
      onClick={onClick}
    >
      <div className="text-3xl text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow mb-4">{description}</p>
      <span className="text-blue-600 font-semibold hover:text-blue-800 self-end">
        En savoir plus <i className="fas fa-arrow-right ml-1"></i>
      </span>
    </div>
  );
};

export default InfoCard;