import React from 'react';
import ContentSection from '../components/ContentSection';

const LifeInsurancePage: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <header className="mb-10 text-center">
        <i className="fas fa-shield-alt text-5xl text-blue-600 mb-4"></i>
        <h1 className="text-4xl font-extrabold text-gray-900">L'Assurance Vie</h1>
        <p className="text-lg text-gray-600 mt-2">Le couteau suisse de l'épargne : flexibilité, fiscalité et transmission.</p>
      </header>

      <ContentSection title="Qu'est-ce que l'assurance vie ?" icon="fa-info-circle">
        <p>L'assurance vie est un produit d'épargne qui permet au souscripteur d'investir de l'argent dans le but de le faire fructifier. Contrairement à ce que son nom suggère, elle est avant tout un outil d'épargne à moyen ou long terme. Elle peut servir à financer un projet, préparer sa retraite ou organiser sa succession.</p>
        <p>Les sommes sont investies sur deux types de supports :</p>
        <ul>
          <li><strong>Le fonds en euros :</strong> Le capital est garanti, la performance est modérée mais sécurisée. Idéal pour la partie sécuritaire de votre épargne.</li>
          <li><strong>Les unités de compte (UC) :</strong> Actions, obligations, immobilier... Le capital n'est pas garanti mais le potentiel de performance est plus élevé. Idéal pour dynamiser votre épargne sur le long terme.</li>
        </ul>
      </ContentSection>

       <ContentSection title="Types de Contrats et Modes de Gestion" icon="fa-cogs">
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
      </ContentSection>

      <ContentSection title="Les grands avantages de l'assurance vie" icon="fa-star">
        <ul>
          <li><strong>Disponibilité de l'épargne :</strong> Votre argent n'est jamais bloqué. Vous pouvez effectuer des retraits (appelés "rachats") à tout moment, en partie ou en totalité.</li>
          <li><strong>Fiscalité avantageuse sur les gains :</strong> Après 8 ans de détention, les gains bénéficient d'un abattement annuel important (4 600 € pour une personne seule, 9 200 € pour un couple) en cas de rachat.</li>
          <li><strong>Outil de transmission de patrimoine :</strong> Au décès, les capitaux sont transmis aux bénéficiaires de votre choix, en grande partie hors droits de succession.</li>
          <li><strong>Flexibilité des versements :</strong> Vous pouvez alimenter votre contrat par des versements libres ou programmés, selon vos capacités d'épargne.</li>
        </ul>
      </ContentSection>

       <ContentSection title="La Clause Bénéficiaire : Un Outil Clé" icon="fa-key">
        <p>La clause bénéficiaire est le cœur de l'assurance vie pour la transmission. Elle vous permet de désigner la ou les personnes qui recevront le capital à votre décès. Une rédaction précise est essentielle pour garantir que vos volontés soient respectées.</p>
        <p>Pour les versements effectués avant vos 70 ans, chaque bénéficiaire désigné profite d'un abattement de <strong>152 500 €</strong> sur les capitaux reçus. Au-delà, les sommes sont taxées à 20% puis 31,25%. Cela en fait un outil de succession inégalé.</p>
      </ContentSection>

      <ContentSection title="Quand et comment débloquer son épargne ?" icon="fa-unlock-alt">
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