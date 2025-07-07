import React from "react";
import heroImage from "../assets/image1.avif";

function Hero({ scrollToSection }) {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-cream to-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img src={process.env.PUBLIC_URL + "/logo.avif"} alt="Powneys Carpentry Services" className="w-48 h-48 mx-auto lg:mx-0 mb-8" />
            <h1 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6">
              Professional Carpentry Services in
              <span className="text-gold"> Merseyside</span>
            </h1>
            <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
              Established 2024, we provide exceptional joinery and carpentry services with free quotes and unmatched craftsmanship throughout Liverpool and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="border-2 border-charcoal text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-charcoal hover:text-cream transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
          </div>
          <div className="animate-on-scroll">
            <img
              src={heroImage}
              alt="Professional carpentry tools"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;