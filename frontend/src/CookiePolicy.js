import React from "react";
import BackToHomeButton from "./components/BackToHomeButton.js";

function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-charcoal">Cookie Policy for Powneys Joinery</h1>
      <p className="mb-2 text-charcoal/80"><strong>Effective Date:</strong> 5th July 2025</p>
      <p className="mb-4 text-charcoal/80">
        At Powneys Joinery, we are committed to protecting your privacy. This Cookie Policy explains how we use cookies and similar technologies on our website to enhance your browsing experience and provide a better service.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">What are cookies?</h2>
      <p className="mb-4 text-charcoal/80">
        Cookies are small text files that are placed on your device when you visit a website. These files help us understand how you interact with the website, allowing us to improve your user experience. Cookies can be used to store preferences, enable certain features, and analyze website traffic.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Types of Cookies We Use</h2>
      <p className="mb-4 text-charcoal/80">
        Currently, we only use essential cookies on our website. These cookies are necessary for the proper functioning of the site and cannot be disabled. They allow you to navigate our website and use its features, such as filling out the request form for a quote.
      </p>
      <h3 className="text-xl font-semibold mt-6 mb-2 text-charcoal">Essential Cookies:</h3>
      <ul className="list-disc pl-6 mb-4 text-charcoal/80">
        <li className="mb-2">
          <strong>Session Cookies:</strong> These cookies are stored temporarily during your browsing session and are deleted when you close your browser.
        </li>
        <li>
          <strong>Authentication Cookies:</strong> These cookies ensure that your session remains secure and that you're properly authenticated when submitting a quote request.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Managing Cookies</h2>
      <p className="mb-4 text-charcoal/80">
        You have the ability to manage cookies through your browser settings. You can disable or delete cookies, but this may affect your ability to use certain features of the website.
      </p>
      <p className="mb-2 text-charcoal/80">
        For more information on how to control cookies, please visit your browser's help section or use the links below for guidance:
      </p>
      <ul className="list-disc pl-6 mb-4 text-charcoal/80">
        <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Updates to this Cookie Policy</h2>
      <p className="mb-4 text-charcoal/80">
        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Effective Date."
      </p>
      <ul className="list-none pl-0 mb-4 text-charcoal/80">
        <li>Powneys Joinery</li>
        <li>
          Email: <a href="mailto:powneys.joinery@gmail.com" className="text-blue-600 hover:underline">powneys.joinery@gmail.com</a>
        </li>
      </ul>
      <BackToHomeButton />
    </div>
  );
}

export default CookiePolicy;