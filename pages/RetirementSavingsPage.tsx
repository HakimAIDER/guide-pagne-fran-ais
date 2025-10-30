import React from 'react';
import ContentSection from '../components/ContentSection';
import { Page } from '../types';

interface RetirementSavingsPageProps {
  setCurrentPage: (page: Page, targetId?: string) => void;
}

const RetirementSavingsPage: React.FC<RetirementSavingsPageProps> = ({ setCurrentPage }) => {
  
  const releaseCases = [
    { 
      title: "Acquisition de la résidence principale", 
      description: "(Sauf pour les droits issus des versements obligatoires).",
      isUnique: true
    },
    { 
      title: "Invalidité", 
      description: "(Vous, votre conjoint ou partenaire de PACS, vos enfants).",
      linkPage: Page.LifeInsurance,
      linkTarget: "deblocage-assurance-vie"
    },
    { title: "Décès du conjoint ou du partenaire de PACS.", isUnique: true },
    { title: "Expiration des droits à l'assurance chômage.", isUnique: true },
    { title: "Surendettement.", isUnique: true },
    { 
      title: "Cessation d'activité non salariée", 
      description: "Suite à un jugement de liquidation judiciaire.",
      linkPage: Page.LifeInsurance,
      linkTarget: "deblocage-assurance-vie"
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <header className="mb-10 text-center">
        <i className="fas fa-umbrella-beach text-5xl text-blue-600 mb-4"></i>
        <h1 className="text-4xl font-extrabold text-gray-900">L'Épargne Retraite : Le PER</h1>
        <p className="text-lg text-gray-600 mt-2">Préparez sereinement votre avenir avec le Plan d'Épargne Retraite.</p>
      </header>
      
      <ContentSection title="Qu'est-ce que le PER ?" icon="fa-file-signature">
        <p>Le Plan d’Épargne Retraite (PER) est un produit d'épargne à long terme qui vous permet de vous constituer un capital ou une rente pour votre retraite. Il a remplacé les anciens produits comme le PERP, Madelin, PERCO et Article 83.</p>
        <p>Le PER se décline en trois compartiments :</p>
        <ul>
          <li><strong>PER Individuel (PERIN) :</strong> Ouvert à tous, il succède au PERP et au contrat Madelin.</li>
          <li><strong>PER d'Entreprise Collectif (PERCOL) :</strong> Ouvert à tous les salariés d'une entreprise, il succède au PERCO.</li>
          <li><strong>PER d'Entreprise Obligatoire (PERO) :</strong> Réservé à certaines catégories de salariés, il succède aux contrats "Article 83".</li>
        </ul>
      </ContentSection>

      <ContentSection title="Avantages pour le particulier" icon="fa-wallet">
        <ul>
            <li><strong>Avantage fiscal à l'entrée :</strong> Les versements volontaires peuvent être déduits de votre revenu imposable, dans la limite d'un plafond. C'est un excellent moyen de réduire vos impôts.</li>
            <li><strong>Flexibilité des sorties :</strong> Au moment de la retraite, vous pouvez choisir de récupérer votre épargne sous forme de capital (en une ou plusieurs fois), de rente viagère, ou une combinaison des deux.</li>
            <li><strong>Gestion pilotée :</strong> Par défaut, la gestion de votre épargne est "pilotée à horizon", c'est-à-dire que les investissements sont progressivement sécurisés à mesure que vous approchez de la retraite.</li>
            <li><strong>Portabilité :</strong> Tous vos compartiments PER peuvent être regroupés en un seul, simplifiant la gestion de votre épargne retraite.</li>
        </ul>
      </ContentSection>

       <ContentSection title="Types de PER et Fiscalité à la Sortie" icon="fa-balance-scale">
        <p>Le PER individuel peut être souscrit sous deux formes :</p>
        <ul>
            <li><strong>PER d'assurance :</strong> souscrit auprès d'un assureur, il fonctionne comme une assurance-vie (fonds euros, unités de compte).</li>
            <li><strong>PER compte-titres :</strong> souscrit auprès d'un gestionnaire d'actifs, il permet d'investir sur un plus grand nombre de titres vifs.</li>
        </ul>
        <p className="mt-4 font-semibold">La fiscalité à la sortie dépend de si vous avez déduit ou non vos versements à l'entrée :</p>
        <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50/70 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Sortie en Capital</h4>
                <p><strong>Versements déduits :</strong> Le capital est imposé au barème progressif de l'impôt sur le revenu (sans abattement de 10%), et les plus-values au Prélèvement Forfaitaire Unique (PFU) de 30%.</p>
                <p className="mt-2"><strong>Versements non déduits :</strong> Le capital est exonéré d'impôt, seules les plus-values sont soumises au PFU de 30%.</p>
            </div>
            <div className="bg-gray-50/70 p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Sortie en Rente Viagère</h4>
                 <p><strong>Versements déduits :</strong> La rente est imposée comme une pension de retraite (barème progressif + prélèvements sociaux après abattement de 10%).</p>
                 <p className="mt-2"><strong>Versements non déduits :</strong> La rente est imposée selon les règles de la rente viagère à titre onéreux (seule une fraction de la rente est imposée, selon votre âge).</p>
            </div>
        </div>
      </ContentSection>

      <ContentSection title="Cas de déblocage anticipé" icon="fa-unlock-alt">
        <p>Bien que l'épargne soit bloquée jusqu'à la retraite, la loi prévoit des cas de déblocage exceptionnel pour faire face à certains aléas de la vie :</p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {releaseCases.map((item, index) => (
            <div
              key={index}
              onClick={item.linkPage ? () => setCurrentPage(item.linkPage, `#${item.linkTarget}`) : undefined}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                item.linkPage 
                  ? 'cursor-pointer border-transparent bg-blue-50/70 hover:border-blue-500 hover:bg-blue-100/80' 
                  : 'border-transparent bg-gray-50/70'
              }`}
            >
              <p className="font-bold text-gray-800">{item.title}</p>
              {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
              {item.linkPage && (
                <p className="text-xs text-blue-700 font-semibold mt-2 flex items-center">
                  <i className="fas fa-link mr-2"></i> Cas similaire en Assurance Vie
                </p>
              )}
            </div>
          ))}
        </div>
      </ContentSection>
    </div>
  );
};

export default RetirementSavingsPage;