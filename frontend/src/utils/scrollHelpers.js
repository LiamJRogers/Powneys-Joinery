export function scrollToSection(sectionId, setIsMenuOpen) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    if (setIsMenuOpen) setIsMenuOpen(false);
  }
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}