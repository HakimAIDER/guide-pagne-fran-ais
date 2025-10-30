import React from 'react';

interface SubNavProps {
  sections: { id: string; title: string }[];
  activeSection: string;
}

const SubNav: React.FC<SubNavProps> = ({ sections, activeSection }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-[68px] bg-white/95 backdrop-blur-sm z-40 mb-8 border-b border-gray-200">
      <div className="container mx-auto">
        <ul className="flex items-center space-x-4 md:space-x-8 overflow-x-auto px-4" role="menubar">
          {sections.map(section => (
            <li key={section.id} className="flex-shrink-0" role="none">
              <a
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                aria-current={activeSection === section.id ? 'location' : undefined}
                className={`block py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${
                  activeSection === section.id
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-600 border-transparent hover:text-blue-600'
                }`}
                role="menuitem"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SubNav;
