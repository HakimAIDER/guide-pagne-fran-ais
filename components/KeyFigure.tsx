import React from 'react';

interface KeyFigureProps {
  icon: string;
  value: string;
  label: string;
}

const KeyFigure: React.FC<KeyFigureProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-md text-center flex flex-col items-center">
      <i className={`fas ${icon} text-3xl text-blue-600 mb-3`}></i>
      <p className="text-4xl font-extrabold text-gray-900">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </div>
  );
};

export default KeyFigure;
