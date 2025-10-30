
import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ page, currentPage, setCurrentPage, children, onClick }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { page: Page.Home, label: 'Accueil' },
    { page: Page.Retirement, label: 'Épargne Retraite' },
    { page: Page.Employee, label: 'Épargne Salariale' },
    { page: Page.LifeInsurance, label: 'Assurance Vie' },
    { page: Page.Simulator, label: 'Simulateur' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage(Page.Home)}>
             <i className="fas fa-seedling text-blue-600 text-2xl"></i>
            <span className="text-xl font-bold text-gray-800">Épargne Avenir</span>
          </div>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>
                    {item.label}
                </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center p-4 space-y-2">
             {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
