import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import useActiveSection from "./hooks/useActiveSection";
import useAnimateOnScroll from "./hooks/useAnimateOnScroll";
import useLockBodyScroll from "./hooks/useLockBodyScroll";
import useContactForm from "./hooks/useContactForm";
import { scrollToSection, scrollToTop } from "./utils/scrollHelpers";
import { services } from "./data/servicesData";
import { reviews } from "./data/reviewsData";
import { galleryPosts } from "./data/galleryData";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { formSubmitted, handleFormSubmit } = useContactForm();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useActiveSection(setActiveSection, setShowBackToTop);
  useAnimateOnScroll();
  useLockBodyScroll(isMenuOpen);

  const handleScrollToSection = (sectionId) => {
    scrollToSection(sectionId, setIsMenuOpen);
  };

  const handleScrollToTop = () => {
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-cream">
      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
      />
      <MobileMenu
        isOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrollToSection={handleScrollToSection}
      />
      <main 
        className={`transition-all duration-500 ${isMenuOpen ? 'blur-md brightness-50' : ''}`}
        onClick={isMenuOpen ? () => setIsMenuOpen(false) : undefined}
      >
        <Hero scrollToSection={handleScrollToSection} />
        <AboutSection />
        <ServicesSection services={services} />
        <GallerySection galleryPosts={galleryPosts} />
        <ReviewsSection reviews={reviews} />
        <ContactSection
          formSubmitted={formSubmitted}
          handleFormSubmit={handleFormSubmit}
        />
        <Footer />
        <BackToTopButton show={showBackToTop} onClick={handleScrollToTop} />
      </main>
    </div>
  );
}

export default App;