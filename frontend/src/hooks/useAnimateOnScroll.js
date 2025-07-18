import { useEffect } from "react";

function isMobile() {
  return window.innerWidth <= 768;
}

export default function useAnimateOnScroll() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px -50px 0px'
    };

    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isMobile() && entry.target.classList.contains('mobile-animate')) {
            entry.target.classList.add('animate-fade-in-up-mobile');
          } else {
            entry.target.classList.add('animate-fade-in-up');
          }
          entry.target.classList.remove('animate-on-scroll');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}