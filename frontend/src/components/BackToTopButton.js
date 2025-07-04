import React from "react";

function BackToTopButton({ show, onClick }) {
  if (!show) return null;
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gold text-charcoal p-3 rounded-full shadow-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-110 md:hidden z-40"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}

export default BackToTopButton;