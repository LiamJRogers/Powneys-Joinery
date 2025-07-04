import React from "react";
import HamburgerButton from "./HamburgerButton";
import NavLinks from "./NavLinks";

function Nav({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) {
  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-charcoal/10 transition-all duration-500
      ${isMenuOpen ? 'bg-cream blur-md brightness-50' : 'bg-cream/90 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="focus:outline-none"
              aria-label="Go to home"
              type="button"
            >
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Powneys Carpentry Services" className="h-10 w-auto" />
            </button>
          </div>
          <div className="hidden md:block">
            <NavLinks
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              orientation="horizontal"
            />
          </div>
          <div className="md:hidden">
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;