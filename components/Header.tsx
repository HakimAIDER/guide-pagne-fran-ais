import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { page: Page.Home, label: 'Accueil' },
    { page: Page.Retirement, label: 'Épargne Retraite' },
    { page: Page.Employee, label: 'Épargne Salariale' },
    { page: Page.LifeInsurance, label: 'Assurance Vie' },
    { page: Page.Simulator, label: 'Simulateur' },
  ];

  const handleMobileNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <>
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
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Ouvrir le menu de navigation"
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="p-5">
          <div className="flex items-center justify-between mb-8">
            <span id="mobile-menu-title" className="text-xl font-bold text-gray-800">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-blue-600"
              aria-label="Fermer le menu de navigation"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
          </div>
          <nav className="flex flex-col space-y-3">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleMobileNavClick(item.page)}
                className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
