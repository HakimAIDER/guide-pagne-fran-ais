
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-6 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Épargne Avenir. Tous droits réservés.</p>
        <p className="text-xs text-gray-400 mt-2">
          Les informations fournies sur ce site sont à titre informatif uniquement et ne constituent pas un conseil financier.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
