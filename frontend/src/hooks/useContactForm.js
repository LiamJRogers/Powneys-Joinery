import { useState } from "react";

export default function useContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnnvywzw", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
        setTimeout(() => setFormSubmitted(false), 15000);
      } else {
        alert("There was an error sending your request. Please try again.");
      }
    } catch {
      alert("There was an error sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return { formSubmitted, handleFormSubmit, submitting };
}