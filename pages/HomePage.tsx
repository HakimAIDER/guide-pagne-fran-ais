import React from 'react';
import InfoCard from '../components/InfoCard';
import { Page } from '../types';
import FAQItem from '../components/FAQItem';
import KeyFigure from '../components/KeyFigure';
import TestimonialCard from '../components/TestimonialCard';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const faqs = [
    {
      question: "Quelle est la différence entre un PER et une Assurance Vie ?",
      answer: (
        <>
          <p>Le <strong>PER (Plan d'Épargne Retraite)</strong> est spécifiquement conçu pour la retraite, avec un capital bloqué jusqu'à l'échéance (sauf cas de déblocage anticipé) et un avantage fiscal à l'entrée. L'<strong>Assurance Vie</strong> est plus flexible : l'épargne reste disponible à tout moment et elle offre un cadre très avantageux pour la transmission de patrimoine (succession).</p>
        </>
      )
    },
    {
      question: "Puis-je avoir plusieurs contrats d'épargne ?",
      answer: (
        <>
          <p>Oui, absolument. Il est même souvent recommandé de diversifier ses supports d'épargne. Vous pouvez détenir un PER, une ou plusieurs Assurances Vie, et un PEE/PERCOL en même temps. Chaque produit répond à des objectifs différents (retraite, projets à moyen terme, transmission) et possède sa propre fiscalité.</p>
        </>
      )
    },
    {
        question: "L'abondement de mon entreprise est-il imposable ?",
        answer: (
            <>
                <p>Non, l'un des grands avantages de l'épargne salariale est que l'abondement versé par votre entreprise sur votre PEE ou PERCOL est <strong>exonéré d'impôt sur le revenu</strong>. Il est seulement soumis aux prélèvements sociaux (CSG/CRDS) de 9,7% au moment de son versement.</p>
            </>
        )
    },
    {
        question: "Mon argent est-il risqué sur ces placements ?",
        answer: (
            <>
                <p>Le niveau de risque dépend des supports que vous choisissez. Les <strong>fonds en euros</strong> (disponibles en Assurance Vie et PER) offrent une garantie du capital. Les <strong>unités de compte (UC)</strong> présentent un risque de perte en capital mais un potentiel de rendement plus élevé. La plupart des contrats proposent une <strong>gestion pilotée</strong> pour adapter le niveau de risque à votre profil et à votre horizon de placement.</p>
            </>
        )
    }
  ];

  const testimonials = [
    {
      quote: "Le simulateur m'a vraiment aidé à visualiser mon avenir financier. Simple, clair et très motivant !",
      name: "Claire D.",
      role: "Utilisatrice du simulateur"
    },
    {
      quote: "Enfin un site qui explique simplement des concepts complexes comme le PER et l'assurance vie. J'ai tout compris !",
      name: "Marc L.",
      role: "Jeune actif"
    },
    {
      quote: "En tant que dirigeante de PME, mettre en place l'épargne salariale a été un vrai plus pour fidéliser mes équipes. Le guide m'a bien orientée.",
      name: "Sophie M.",
      role: "Chef d'entreprise"
    }
  ];


  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="text-center bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Bâtissez Votre Avenir Financier, Dès Aujourd'hui
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Explorez des solutions d'épargne intelligentes pour préparer votre retraite, financer vos projets et optimiser votre patrimoine en toute sérénité.
        </p>
        <button
          onClick={() => setCurrentPage(Page.Simulator)}
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 shadow-xl text-lg"
        >
          Démarrer une Simulation
        </button>
      </section>

      {/* Info Cards Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Explorez les solutions d'épargne</h2>
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

      {/* Our Approach Section */}
      <section className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Notre Approche : Simplifier l'Épargne</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <i className="fas fa-bullseye text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Clarté</h3>
            <p className="text-gray-600">Nous traduisons le jargon financier en langage simple pour que vous preniez des décisions éclairées.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <i className="fas fa-book-reader text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Pédagogie</h3>
            <p className="text-gray-600">Nous vous donnons les clés pour comprendre les mécanismes de chaque solution d'épargne.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
              <i className="fas fa-rocket text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Action</h3>
            <p className="text-gray-600">Notre simulateur vous permet de passer de la théorie à la pratique et de concrétiser vos projets.</p>
          </div>
        </div>
      </section>
      
      {/* Key Figures Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">L'épargne en France en quelques chiffres</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <KeyFigure icon="fa-chart-line" value="150 Md€" label="d'encours sur les PER en France" />
            <KeyFigure icon="fa-gift" value="1 900 Md€" label="d'encours sur l'Assurance Vie" />
            <KeyFigure icon="fa-users-cog" value="12 M" label="de salariés couverts par l'épargne salariale" />
            <KeyFigure icon="fa-euro-sign" value="4 600 €" label="d'abattement fiscal annuel sur l'Assurance Vie" />
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

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Ce que nos utilisateurs en disent</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
            />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Questions Fréquentes</h2>
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question}>
              {faq.answer}
            </FAQ-Item>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;