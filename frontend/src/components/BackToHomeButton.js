import React from "react";
import { useNavigate } from "react-router-dom";

function BackToHomeButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="mt-2 px-4 py-2 bg-gold text-charcoal rounded hover:bg-gold/90 font-semibold transition-colors"
    >
      ← Back to Home
    </button>
  );
}

export default BackToHomeButton;