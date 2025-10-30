import React from 'react';
import InfoCard from '../components/InfoCard';
import { Page } from '../types';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Planifiez Votre Avenir Financier
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Découvrez les meilleures solutions d'épargne pour préparer votre retraite, valoriser votre capital et optimiser votre fiscalité.
        </p>
        <button
          onClick={() => setCurrentPage(Page.Simulator)}
          className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Lancer le Simulateur
        </button>
      </section>

      {/* Info Cards Section */}
      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoCard
            icon={<i className="fas fa-umbrella-beach"></i>}
            title="Épargne Retraite (PER)"
            description="Anticipez votre avenir avec le Plan d'Épargne Retraite. Une solution flexible pour vous constituer un complément de revenus, tout en bénéficiant d'avantages fiscaux."
            onClick={() => setCurrentPage(Page.Retirement)}
          />
          <InfoCard
            icon={<i className="fas fa-users"></i>}
            title="Épargne Salariale"
            description="Profitez des dispositifs mis en place par votre entreprise (PEE, PERCO/PERCOL) pour vous constituer une épargne à des conditions avantageuses."
            onClick={() => setCurrentPage(Page.Employee)}
          />
          <InfoCard
            icon={<i className="fas fa-shield-alt"></i>}
            title="Assurance Vie"
            description="Un outil d'épargne polyvalent pour financer vos projets, valoriser votre capital ou préparer votre transmission dans un cadre fiscal attractif."
            onClick={() => setCurrentPage(Page.LifeInsurance)}
          />
        </div>
      </section>
      
      {/* For Business Section */}
      <section className="bg-gray-800/90 backdrop-blur-md text-white p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">Un atout pour votre entreprise</h2>
                <p className="text-gray-300 max-w-2xl">
                    Motivez et fidélisez vos salariés en leur proposant des solutions d'épargne performantes. Découvrez les avantages sociaux et fiscaux pour votre entreprise.
                </p>
            </div>
            <button
                onClick={() => setCurrentPage(Page.Employee)}
                className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300 whitespace-nowrap"
            >
                Solutions Entreprise
            </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;