import React from 'react';
import ContentSection from '../components/ContentSection';

const EmployeeSavingsPage: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <header className="mb-10 text-center">
        <i className="fas fa-users text-5xl text-blue-600 mb-4"></i>
        <h1 className="text-4xl font-extrabold text-gray-900">L'Épargne Salariale</h1>
        <p className="text-lg text-gray-600 mt-2">Un dispositif gagnant-gagnant pour les salariés et l'entreprise.</p>
      </header>

      <ContentSection title="Qu'est-ce que l'épargne salariale ?" icon="fa-info-circle">
        <p>L'épargne salariale est un système d'épargne collectif mis en place au sein de certaines entreprises. Elle permet aux salariés de se constituer un portefeuille de valeurs mobilières (actions, obligations, etc.) avec l'aide de leur employeur.</p>
        <p>Les deux principaux plans sont :</p>
        <ul>
          <li><strong>Le Plan d'Épargne Entreprise (PEE) :</strong> Horizon de 5 ans. Il est conçu pour des projets à moyen terme. L'épargne est disponible après 5 ans ou pour des cas de déblocage anticipé (achat immobilier, mariage, etc.).</li>
          <li><strong>Le Plan d'Épargne pour la Retraite Collectif (PERCOL) :</strong> Horizon retraite. Il vise à se constituer un complément de revenus pour la retraite. L'épargne est bloquée jusqu'à la retraite, sauf cas exceptionnels.</li>
        </ul>
      </ContentSection>

       <ContentSection title="Comment alimenter son plan ?" icon="fa-piggy-bank">
          <p>Votre épargne salariale peut être alimentée par plusieurs sources :</p>
          <ul>
              <li><strong>La participation :</strong> Redistribution d'une partie des bénéfices de l'entreprise. Obligatoire dans les entreprises de plus de 50 salariés.</li>
              <li><strong>L'intéressement :</strong> Prime liée à la performance de l'entreprise. C'est un dispositif facultatif.</li>
              <li><strong>Les versements volontaires :</strong> Vous pouvez verser de votre propre épargne, de manière ponctuelle ou programmée.</li>
              <li><strong>L'abondement :</strong> C'est une aide financière de l'entreprise qui vient compléter vos versements. C'est un levier de performance très puissant car il est souvent défiscalisé.</li>
              <li><strong>Transfert de jours de repos :</strong> Possibilité de monétiser certains jours de congés non pris (via un Compte Épargne Temps ou directement).</li>
          </ul>
      </ContentSection>

      <ContentSection title="Avantages pour les salariés" icon="fa-user-check">
        <ul>
          <li><strong>Abondement :</strong> L'entreprise peut compléter vos versements jusqu'à 300% (dans certaines limites). C'est un puissant levier de performance.</li>
          <li><strong>Exonération fiscale :</strong> Les sommes versées (participation, intéressement, abondement) sont exonérées d'impôt sur le revenu. Les plus-values sont exonérées d'impôt (hors prélèvements sociaux de 17,2%).</li>
          <li><strong>Frais de gestion réduits :</strong> Les frais sont souvent pris en charge en partie ou en totalité par l'entreprise.</li>
        </ul>
      </ContentSection>
      
      <ContentSection title="Avantages pour l'entreprise" icon="fa-building">
        <ul>
          <li><strong>Outil de motivation et de fidélisation :</strong> C'est un élément de rémunération attractif qui valorise et engage les collaborateurs.</li>
          <li><strong>Avantages sociaux et fiscaux :</strong> Les sommes versées par l'entreprise (abondement, intéressement, participation) sont déductibles du bénéfice imposable et exonérées de la plupart des cotisations sociales (hors forfait social).</li>
          <li><strong>Image d'entreprise positive :</strong> Montre l'engagement de l'entreprise envers le bien-être financier de ses employés.</li>
        </ul>
      </ContentSection>

      <ContentSection title="Cas de déblocage anticipé" icon="fa-unlock-alt">
        <p>Pour le PEE (bloqué 5 ans), vous pouvez débloquer votre épargne avant terme dans les cas suivants :</p>
        <ul>
          <li>Mariage, conclusion d'un PACS.</li>
          <li>Naissance ou adoption d'un 3ème enfant.</li>
          <li>Divorce, séparation, dissolution d'un PACS, avec la garde d'au moins un enfant.</li>
          <li>Acquisition ou construction de la résidence principale.</li>
          <li>Rupture du contrat de travail (démission, licenciement, retraite).</li>
          <li>Création ou reprise d'entreprise.</li>
          <li>Surendettement.</li>
        </ul>
        <p className="mt-4">Le PERCOL est bloqué jusqu'à la retraite, sauf pour les cas de déblocage du PER (achat de la résidence principale, accidents de la vie...).</p>
      </ContentSection>
    </div>
  );
};

export default EmployeeSavingsPage;