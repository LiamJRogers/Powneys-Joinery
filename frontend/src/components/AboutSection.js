import React from "react";
import aboutImage from "../assets/image2.avif"; 

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <img
              src={aboutImage}
              alt="Professional carpenter at work"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-charcoal mb-6">About Powneys Joinery</h2>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              Founded in 2024, Powneys Joinery is your trusted local carpentry specialist serving Liverpool, Merseyside, and surrounding areas. We pride ourselves on delivering exceptional craftsmanship and professional service for every project, no matter the size.
            </p>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              From bespoke kitchen cabinets to precision flooring installation, our attention to detail and commitment to quality ensures your vision becomes reality. We offer free quotes and work closely with our clients to deliver results that exceed expectations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-gold/20 p-3 rounded-full">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-charcoal">Free Quotes • Professional Service • Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;