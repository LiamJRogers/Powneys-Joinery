import React from "react";
import BackToHomeButton from "./components/BackToHomeButton.js";


function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6 text-charcoal">Privacy Policy for Powneys Joinery</h1>
      <p className="mb-2 text-charcoal/80"><strong>Effective Date:</strong> 5th July 2025</p>

      <p className="mb-4 text-charcoal/80">
        At Powneys Joinery, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website or request a quote from us.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Information We Collect</h2>
      <p className="mb-2 text-charcoal/80">
        We collect personal information from you when you fill out the form on our website. The information we collect includes:
      </p>
      <ul className="list-disc pl-6 mb-4 text-charcoal/80">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Service Required</li>
        <li>Project Details</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">How We Use Your Information</h2>
      <p className="mb-2 text-charcoal/80">
        We use the information you provide to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-charcoal/80">
        <li>Respond to your request for a free quote.</li>
        <li>Communicate with you regarding the services you require.</li>
        <li>Improve our website and service offerings based on the information you provide.</li>
      </ul>
      <p className="mb-4 text-charcoal/80">
        We do not sell, rent, or share your personal information with third parties for marketing purposes. However, we may share your information with trusted third parties who assist us in providing services to you (such as contractors or suppliers), but only to the extent necessary to fulfill your request.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Data Security</h2>
      <p className="mb-4 text-charcoal/80">
        We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of internet transmission or electronic storage is 100% secure, and we cannot guarantee the absolute security of your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Retention of Data</h2>
      <p className="mb-4 text-charcoal/80">
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. If you wish to request the deletion of your data, you can contact us at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Your Rights</h2>
      <p className="mb-2 text-charcoal/80">
        As a user of our website, you have the right to:
      </p>
      <ul className="list-disc pl-6 mb-4 text-charcoal/80">
        <li>Request access to the personal information we hold about you.</li>
        <li>Request that we correct or update any inaccurate or incomplete information.</li>
        <li>Request that we delete your personal information, subject to any legal obligations.</li>
        <li>Object to the processing of your personal information, where applicable.</li>
      </ul>
      <p className="mb-4 text-charcoal/80">
        If you would like to exercise any of these rights or if you have any concerns about how your information is being used, please contact us using the details below.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Cookies and Tracking Technologies</h2>
      <p className="mb-4 text-charcoal/80">
        We use essential cookies on our website to provide a better user experience. These cookies are necessary for the basic functionality of the website, such as form submissions. For more information on cookies, please refer to our Cookie Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Third-Party Websites</h2>
      <p className="mb-4 text-charcoal/80">
        Our website may contain links to third-party websites that are not operated by us. Please note that we are not responsible for the content or privacy practices of these websites. We encourage you to review the privacy policies of any third-party websites you visit.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Changes to this Privacy Policy</h2>
      <p className="mb-4 text-charcoal/80">
        We may update this Privacy Policy from time to time. When we do, we will post the new policy on this page with an updated "Effective Date." Please check back periodically for any updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-charcoal">Contact Us</h2>
      <p className="mb-4 text-charcoal/80">
        If you have any questions or concerns regarding this Privacy Policy or how we handle your personal data, please contact us:
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

export default PrivacyPolicy;