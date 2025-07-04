import React from "react";

const sections = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];

function NavLinks({ activeSection, scrollToSection, orientation = "horizontal", onClickLink }) {
  return (
    <div className={
      orientation === "horizontal"
        ? "ml-10 flex items-baseline space-x-4"
        : "space-y-4"
    }>
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => {
            scrollToSection(section);
            if (onClickLink) onClickLink();
          }}
          className={
            orientation === "horizontal"
              ? `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gold text-charcoal'
                    : 'text-charcoal hover:bg-gold/20 hover:text-charcoal'
                }`
              : `block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-400 ease-out transform ${
                  activeSection === section
                    ? 'bg-gold text-charcoal shadow-md translate-x-2'
                    : 'text-charcoal hover:bg-gold/20 hover:translate-x-1'
                }`
          }
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default NavLinks;