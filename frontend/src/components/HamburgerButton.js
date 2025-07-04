import React from "react";

function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative p-3 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-500"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 relative">
        <span className={`absolute left-0 top-0 w-6 h-0.5 bg-charcoal rounded-full transform transition-all duration-500 ease-in-out ${
          isOpen ? 'rotate-45 translate-y-2.5' : ''
        }`}></span>
        <span className={`absolute left-0 top-2.5 w-6 h-0.5 bg-charcoal rounded-full transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}></span>
        <span className={`absolute left-0 top-5 w-6 h-0.5 bg-charcoal rounded-full transform transition-all duration-500 ease-in-out ${
          isOpen ? '-rotate-45 -translate-y-2.5' : ''
        }`}></span>
      </div>
    </button>
  );
}

export default HamburgerButton;