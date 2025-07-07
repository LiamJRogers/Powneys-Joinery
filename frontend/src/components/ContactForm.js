import React, { useState } from "react";
import validateContactForm from "../utils/validateContactForm";

function ContactForm({ formSubmitted, handleFormSubmit }) {
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    projectDetails: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await handleFormSubmit(e, values);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        projectDetails: "",
      });
      setErrors({});
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-on-scroll">
      <h3 className="text-2xl font-bold text-charcoal mb-6">Request a Free Quote</h3>
      {formSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 mt-4 flex flex-col items-center justify-center min-h-[300px]">
          <svg className="w-12 h-12 text-green-500 mb-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p className="text-green-700 font-medium text-lg text-center">
            Thank you! Your quote request has been sent successfully.<br />
            We aim to get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                placeholder="Your first name"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
                placeholder="Your last name"
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
              placeholder="your.email@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
              placeholder="Your phone number"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-charcoal mb-2">
              Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={values.address || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
              placeholder="Your address"
            />
            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              value={values.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300"
            >
              <option value="">Please select a service</option>
              <option value="lvt-flooring">LVT Flooring</option>
              <option value="skirting-boards">Skirting Boards & Arcs</option>
              <option value="panelling-trims">Panelling & Trims</option>
              <option value="door-hanging">Door Hanging</option>
              <option value="bespoke-cabinets">Bespoke Cabinets</option>
              <option value="other-joinery">Other Joinery Enquiries</option>
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
          </div>
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-charcoal mb-2">
              Tell Us About Your Project *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={values.projectDetails}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all duration-300 resize-vertical"
              placeholder="Please describe your project in detail..."
            ></textarea>
            {errors.projectDetails && <p className="text-red-500 text-xs mt-1">{errors.projectDetails}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-gold text-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            disabled={submitting}
          >
            {submitting ? (
              <svg className="animate-spin h-6 w-6 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            ) : (
              "Send Free Quote Request"
            )}
          </button>
          <p className="text-sm text-charcoal/60 text-center">
            * Required fields. We aim to get back to you within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}

export default ContactForm;