import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const element = document.documentElement;
    const scrollTop = element.scrollTop || document.body.scrollTop;
    const scrollHeight = element.scrollHeight || document.body.scrollHeight;
    const clientHeight = element.clientHeight;

    // Avoid division by zero
    if (scrollHeight - clientHeight === 0) {
      setScrollPercentage(100);
      return;
    }

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Call handler once on mount to set initial state in case the page is already scrolled
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-gray-200/50 z-50" role="progressbar" aria-label="Progression de la lecture" aria-valuemin={0} aria-valuemax={100} aria-valuenow={scrollPercentage}>
      <div 
        className="h-1 bg-blue-600 transition-all duration-75 ease-out" 
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;