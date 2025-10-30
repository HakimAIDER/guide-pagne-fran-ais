import React, { useEffect, useState } from 'react';
import ContentSection from '../components/ContentSection';

interface LifeInsurancePageProps {
  targetSection?: string | null;
  clearTargetSection?: () => void;
}

const LifeInsurancePage: React.FC<LifeInsurancePageProps> = ({ targetSection, clearTargetSection }) => {
  const [activeTab, setActiveTab] = useState<'contracts' | 'comparison'>('contracts');

  useEffect(() => {
    if (targetSection && clearTargetSection) {
      const element = document.getElementById(targetSection.substring(1)); // remove '#'
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.classList.add('highlight-on-load');
        setTimeout(() => {
          element.classList.remove('highlight-on-load');
        }, 2500); // Match animation duration
      }
      clearTargetSection();
    }
  }, [targetSection, clearTargetSection]);

  const TabButton: React.FC<{
    label: string;
    tabName: 'contracts' | 'comparison';
  }> = ({ label, tabName }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`py-3 px-4 font-semibold text-sm transition-colors duration-300 border-b-2 ${
        activeTab === tabName
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      role="tab"
      aria-selected={activeTab === tabName}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <header className="mb-10 text-center">
        <i className="fas fa-shield-alt text-5xl text-blue-600 mb-4"></i>
        <h1 className="text-4xl font-extrabold text-gray-900">L'Assurance Vie</h1>
        <p className="text-lg text-gray-600 mt-2">Le couteau suisse de l'épargne : flexibilité, fiscalité et transmission.</p>
      </header>

      <ContentSection title="Qu'est-ce que l'assurance vie ?" icon="fa-book-open">
        <p>L'assurance vie est un produit d'épargne qui permet au souscripteur d'investir de l'argent dans le but de le faire fructifier. Contrairement à ce que son nom suggère, elle est avant tout un outil d'épargne à moyen ou long terme. Elle peut servir à financer un projet, préparer sa retraite ou organiser sa succession.</p>
        <p>Les sommes sont investies sur deux types de supports :</p>
        <ul>
          <li><strong>Le fonds en euros :</strong> Le capital est garanti, la performance est modérée mais sécurisée. Idéal pour la partie sécuritaire de votre épargne.</li>
          <li><strong>Les unités de compte (UC) :</strong> Actions, obligations, immobilier... Le capital n'est pas garanti mais le potentiel de performance est plus élevé. Idéal pour dynamiser votre épargne sur le long terme.</li>
        </ul>
      </ContentSection>
      
      <ContentSection title="Les grands avantages de l'assurance vie" icon="fa-star">
        <ul>
          <li><strong>Disponibilité de l'épargne :</strong> Votre argent n'est jamais bloqué. Vous pouvez effectuer des retraits (appelés "rachats") à tout moment, en partie ou en totalité.</li>
          <li><strong>Fiscalité avantageuse sur les gains :</strong> Après 8 ans de détention, les gains bénéficient d'un abattement annuel important (4 600 € pour une personne seule, 9 200 € pour un couple) en cas de rachat.</li>
          <li><strong>Outil de transmission de patrimoine :</strong> Au décès, les capitaux sont transmis aux bénéficiaires de votre choix, en grande partie hors droits de succession.</li>
          <li><strong>Flexibilité des versements :</strong> Vous pouvez alimenter votre contrat par des versements libres ou programmés, selon vos capacités d'épargne.</li>
        </ul>
      </ContentSection>

      <ContentSection title="Explorer en détail" icon="fa-search-plus">
          <div role="tablist" className="border-b border-gray-200 mb-6">
              <nav className="-mb-px flex space-x-4" aria-label="Onglets">
                  <TabButton label="Types de Contrats & Gestion" tabName="contracts" />
                  <TabButton label="Le Duel : Assurance Vie vs. PER" tabName="comparison" />
              </nav>
          </div>

          <div role="tabpanel">
              {activeTab === 'contracts' && (
                  <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Types de Contrats et Modes de Gestion</h3>
                      <p>On distingue deux grands types de contrats :</p>
                      <ul>
                          <li><strong>Contrats monosupport :</strong> Investis à 100% sur le fonds en euros. Ils sont de plus en plus rares.</li>
                          <li><strong>Contrats multisupports :</strong> Ils permettent de répartir votre épargne entre le fonds en euros et différentes unités de compte. C'est le type de contrat le plus courant et le plus flexible.</li>
                      </ul>
                      <p className="mt-4">Pour gérer votre contrat multisupports, plusieurs options s'offrent à vous :</p>
                      <ul>
                          <li><strong>Gestion libre :</strong> Vous choisissez vous-même la répartition de vos investissements et effectuez vos propres arbitrages.</li>
                          <li><strong>Gestion pilotée (ou sous mandat) :</strong> Vous déléguez la gestion de votre contrat à des professionnels qui l'adaptent en fonction de votre profil de risque (prudent, équilibré, dynamique) et des conditions de marché.</li>
                      </ul>
                  </div>
              )}
              {activeTab === 'comparison' && (
                  <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Assurance Vie vs. PER : Le Duel</h3>
                      <p>Bien que complémentaires, ces deux placements répondent à des logiques différentes. Voici un tableau pour y voir plus clair :</p>
                      <div className="overflow-x-auto mt-4">
                          <table className="w-full text-left border-collapse">
                              <thead>
                                  <tr className="bg-gray-100/80">
                                      <th className="p-3 border-b font-semibold">Critère</th>
                                      <th className="p-3 border-b font-semibold">Assurance Vie</th>
                                      <th className="p-3 border-b font-semibold">PER (Plan d'Épargne Retraite)</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="hover:bg-gray-50/70">
                                      <td className="p-3 border-b font-medium text-gray-800">Objectif Principal</td>
                                      <td className="p-3 border-b">Projets divers, valorisation de capital, transmission</td>
                                      <td className="p-3 border-b">Préparation de la retraite (complément de revenus)</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50/70">
                                      <td className="p-3 border-b font-medium text-gray-800">Disponibilité</td>
                                      <td className="p-3 border-b text-green-600 font-semibold">Disponible à tout moment (via rachat)</td>
                                      <td className="p-3 border-b text-red-600 font-semibold">Bloqué jusqu'à la retraite (sauf cas exceptionnels)</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50/70">
                                      <td className="p-3 border-b font-medium text-gray-800">Avantage Fiscal (Versements)</td>
                                      <td className="p-3 border-b">Aucun (sauf cas spécifiques)</td>
                                      <td className="p-3 border-b">Déduction du revenu imposable (réduction d'impôt)</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50/70">
                                      <td className="p-3 border-b font-medium text-gray-800">Fiscalité (Retraits)</td>
                                      <td className="p-3 border-b">Gains imposés avec abattement de 4 600 € / 9 200 € après 8 ans</td>
                                      <td className="p-3 border-b">Capital et/ou rente imposés au barème de l'impôt sur le revenu</td>
                                  </tr>
                                  <tr className="hover:bg-gray-50/70">
                                      <td className="p-3 border-b font-medium text-gray-800">Transmission (Décès)</td>
                                      <td className="p-3 border-b">Abattement de 152 500 € par bénéficiaire (hors succession)</td>
                                      <td className="p-3 border-b">Fiscalité de l'assurance vie si décès avant la retraite, sinon intégré à la succession</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                      <p className="mt-6 font-semibold">En résumé :</p>
                      <p>Le <strong>PER</strong> est un excellent "tunnel" d'épargne pour préparer spécifiquement sa retraite, surtout si vous souhaitez réduire vos impôts aujourd'hui. L'<strong>Assurance Vie</strong> est un outil polyvalent, idéal pour la flexibilité, les projets à moyen terme et pour optimiser la transmission de votre patrimoine.</p>
                  </div>
              )}
          </div>
      </ContentSection>

       <ContentSection title="La Clause Bénéficiaire : Un Outil Clé" icon="fa-user-shield">
        <p>La clause bénéficiaire est le cœur de l'assurance vie pour la transmission. Elle vous permet de désigner la ou les personnes qui recevront le capital à votre décès. Une rédaction précise est essentielle pour garantir que vos volontés soient respectées.</p>
        <p>Pour les versements effectués avant vos 70 ans, chaque bénéficiaire désigné profite d'un abattement de <strong>152 500 €</strong> sur les capitaux reçus. Au-delà, les sommes sont taxées à 20% puis 31,25%. Cela en fait un outil de succession inégalé.</p>
      </ContentSection>

      <ContentSection id="deblocage-assurance-vie" title="Quand et comment débloquer son épargne ?" icon="fa-hand-holding-usd">
        <p>Il n'y a pas de "déblocage" au sens strict car l'argent est toujours disponible. On parle de <strong>rachat</strong>. Vous pouvez faire un rachat partiel ou total à tout moment.</p>
        <p>La fiscalité s'applique uniquement sur la part de gains comprise dans votre rachat. Elle est plus avantageuse après 8 ans.</p>
        <p>Certaines situations permettent une exonération totale d'impôt sur les plus-values (mais pas des prélèvements sociaux) lors d'un rachat :</p>
        <ul>
            <li>Licenciement.</li>
            <li>Mise à la retraite anticipée.</li>
            <li>Invalidité de 2ème ou 3ème catégorie.</li>
            <li>Cessation d'activité non salariée suite à une liquidation judiciaire.</li>
        </ul>
      </ContentSection>
    </div>
  );
};

export default LifeInsurancePage;