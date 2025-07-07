import React from "react";

function ServicesSection({ services }) {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Our Services</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            From flooring to bespoke cabinets, we offer comprehensive carpentry and joinery services tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-on-scroll mobile-animate bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-cream">
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-charcoal mb-4 text-center">{service.title}</h3>
              <p className="text-charcoal/70 text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;