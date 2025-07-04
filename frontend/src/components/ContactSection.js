import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactSection({ formSubmitted, handleFormSubmit }) {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Get In Touch</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free quote and consultation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm
            formSubmitted={formSubmitted}
            handleFormSubmit={handleFormSubmit}
          />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;