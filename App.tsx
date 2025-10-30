
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RetirementSavingsPage from './pages/RetirementSavingsPage';
import EmployeeSavingsPage from './pages/EmployeeSavingsPage';
import LifeInsurancePage from './pages/LifeInsurancePage';
import SimulatorPage from './pages/SimulatorPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={setCurrentPage} />;
      case Page.Retirement:
        return <RetirementSavingsPage />;
      case Page.Employee:
        return <EmployeeSavingsPage />;
      case Page.LifeInsurance:
        return <LifeInsurancePage />;
      case Page.Simulator:
        return <SimulatorPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
