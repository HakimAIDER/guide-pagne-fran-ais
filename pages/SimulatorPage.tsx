import React from 'react';
import SavingsSimulator from '../components/SavingsSimulator';

const SimulatorPage: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl shadow-lg">
      <header className="mb-8 text-center">
        <i className="fas fa-calculator text-5xl text-blue-600 mb-4"></i>
        <h1 className="text-4xl font-extrabold text-gray-900">Simulateur d'Épargne</h1>
        <p className="text-lg text-gray-600 mt-2">Estimez la croissance de votre capital et projetez-vous dans l'avenir.</p>
      </header>
      <SavingsSimulator />

      <div className="mt-10 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
            <i className="fas fa-exclamation-triangle text-yellow-500 mr-3"></i>
            Avertissement
        </h3>
        <p className="text-sm text-gray-600">
          Ce simulateur fournit des estimations basées sur les données que vous avez saisies. Les résultats sont fournis à titre indicatif et ne constituent en aucun cas un conseil en investissement ou une garantie de performance future. Le rendement annuel est une hypothèse qui peut varier. Nous vous recommandons de consulter un conseiller financier professionnel avant de prendre toute décision d'investissement.
        </p>
      </div>
    </div>
  );
};

export default SimulatorPage;