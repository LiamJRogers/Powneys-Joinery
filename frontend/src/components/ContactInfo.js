import React from "react";

function ContactInfo() {
  return (
    <div className="animate-on-scroll">
      <h3 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="bg-gold/20 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal">Email</h4>
            <a href="mailto:powneysjoinery@gmail.com" className="text-gold hover:text-gold/80 transition-colors">
              powneys.joinery@gmail.com
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-gold/20 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal">Instagram</h4>
            <a
              href="https://instagram.com/PowneysJoinery"
              className="text-gold hover:text-gold/80 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              @PowneysJoinery
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-gold/20 p-3 rounded-full mr-4">
            <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal">Facebook</h4>
            <a
            href="https://www.facebook.com/profile.php?id=61562260378696"
            className="text-gold hover:text-gold/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit our Facebook
          </a>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-cream/50 p-6 rounded-lg">
        <h4 className="font-semibold text-charcoal mb-3">We're Ready to Help</h4>
        <div className="text-charcoal/80">
          Have a question? Get in touch and we’ll get back to you as soon as possible.
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;