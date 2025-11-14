import { useEffect, useRef } from 'react';
import './MobileMenu.css';

function MobileMenu({ isOpen, links, activeSection, onLinkClick }) {
  const firstLinkRef = useRef(null);
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate navigation height dynamically for better accuracy
      const nav = document.querySelector('.navigation');
      const navHeight = nav ? nav.offsetHeight : 60;
      
      // Add small buffer for better visual alignment
      const offset = navHeight + 10;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      
      // Close menu first for better UX
      onLinkClick();
      
      // Delay scroll slightly to allow menu to close
      setTimeout(() => {
        try {
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scroll
          window.scrollTo(0, targetPosition);
        }
        
        // Update URL hash without jumping
        if (window.history && window.history.pushState) {
          window.history.pushState(null, '', href);
        }
      }, 300); // Match menu close animation duration
    } else {
      onLinkClick();
    }
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onLinkClick();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onLinkClick]);

  // Prevent body scroll when menu is open and manage focus
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus first link when menu opens for keyboard navigation
      if (firstLinkRef.current) {
        firstLinkRef.current.focus();
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`mobile-menu ${isOpen ? 'open' : ''}`}
      role="dialog"
      aria-label="Mobile navigation menu"
      aria-hidden={!isOpen}
    >
      <nav aria-label="Mobile navigation">
        <ul className="mobile-menu-links">
          {links.map((link, index) => (
            <li key={link.id} className="mobile-menu-item">
              <a
                ref={index === 0 ? firstLinkRef : null}
                href={link.href}
                className={`mobile-menu-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                onClick={(e) => handleClick(e, link.href)}
                aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileMenu;
