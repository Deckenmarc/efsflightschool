import { useState, useEffect } from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import { navigationLinks } from '../../data/navigationLinks';
import './Navigation.css';

/**
 * Navigation component with smooth scroll and active section detection
 * 
 * Features:
 * - Fixed positioning at top of viewport
 * - Smooth scroll to sections with offset for fixed header
 * - Active section highlighting using Intersection Observer
 * - Responsive mobile menu
 * - Browser back/forward navigation support
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6
 */
function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Intersection Observer to detect active section
    // Using negative top margin to account for fixed navigation header
    // This ensures sections are marked active when they're properly visible
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px', // Top offset for nav, bottom offset to trigger earlier
      threshold: [0, 0.1, 0.2] // Multiple thresholds for better accuracy
    };

    const observerCallback = (entries) => {
      // Sort entries by their position on the page (top to bottom)
      const sortedEntries = entries.sort((a, b) => {
        return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
      });

      // Find the first intersecting section
      const intersectingEntry = sortedEntries.find(entry => entry.isIntersecting);
      
      if (intersectingEntry) {
        const sectionId = intersectingEntry.target.id;
        setActiveSection(sectionId);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Set initial active section on mount
    const handleInitialSection = () => {
      const scrollPosition = window.scrollY + 100; // Account for nav height
      const sections = document.querySelectorAll('section[id]');
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    handleInitialSection();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Logo />
        <NavLinks 
          links={navigationLinks} 
          activeSection={activeSection}
          onLinkClick={closeMobileMenu}
        />
        <MobileMenuButton 
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
        />
      </div>
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        links={navigationLinks}
        activeSection={activeSection}
        onLinkClick={closeMobileMenu}
      />
    </nav>
  );
}

export default Navigation;
