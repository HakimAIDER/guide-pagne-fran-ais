import React from 'react';

interface ContentSectionProps {
  id?: string;
  title: string;
  icon: string;
  children: React.ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ id, title, icon, children }) => {
  return (
    <section id={id} className="mb-12 scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-l-4 border-blue-500 pl-4 flex items-center">
        <i className={`fas ${icon} mr-4 text-blue-500`}></i>
        {title}
      </h2>
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
};

export default ContentSection;