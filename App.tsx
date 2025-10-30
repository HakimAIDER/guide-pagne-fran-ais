import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RetirementSavingsPage from './pages/RetirementSavingsPage';
import EmployeeSavingsPage from './pages/EmployeeSavingsPage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import SimulatorPage from './pages/SimulatorPage';
import { Page } from './types';
import ScrollProgressBar from './components/ScrollProgressBar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [lastVisitedPage, setLastVisitedPage] = useState<Page | null>(null);

  const handleNavigation = (page: Page) => {
    // Si nous naviguons VERS la page d'accueil...
    if (page === Page.Home) {
      // ...et que nous venons d'une page de contenu...
      if ([Page.Retirement, Page.Employee, Page.LifeInsurance].includes(currentPage)) {
        // ...alors on enregistre la page d'où l'on vient.
        setLastVisitedPage(currentPage);
      }
    }
    // Si on quitte la page d'accueil, on réinitialise les conseils
    if (currentPage === Page.Home && page !== Page.Home) {
      setLastVisitedPage(null);
    }
    setCurrentPage(page);
  };


  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={handleNavigation} lastVisitedPage={lastVisitedPage} />;
      case Page.Retirement:
        return <RetirementSavingsPage />;
      case Page.Employee:
        return <EmployeeSavingsPage />;
      case Page.LifeInsurance:
        return <LifeInsurancePage />;
      case Page.Simulator:
        return <SimulatorPage />;
      default:
        return <HomePage setCurrentPage={handleNavigation} lastVisitedPage={lastVisitedPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={handleNavigation} />
      {currentPage !== Page.Home && <ScrollProgressBar />}
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;