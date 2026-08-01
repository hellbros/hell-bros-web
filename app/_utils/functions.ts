export default function scrollToSection(sectionId: string, offset: number = 0) {
    const section = document.getElementById(sectionId);
    if (section) {
      const gap = 5; // breathing room below the fixed header when navigating
      const top = Math.max(section.offsetTop - offset - gap, 0);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
