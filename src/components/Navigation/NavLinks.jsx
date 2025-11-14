import './NavLinks.css';

function NavLinks({ links, activeSection, onLinkClick }) {
  const handleClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Calculate navigation height dynamically for better accuracy
      const nav = document.querySelector('.navigation');
      const navHeight = nav ? nav.offsetHeight : 70;
      
      // Add small buffer for better visual alignment
      const offset = navHeight + 10;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
      
      // Try smooth scroll with fallback for older browsers
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
    }
    
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <ul className="nav-links" role="list">
      {links.map((link) => (
        <li key={link.id} className="nav-link-item">
          <a
            href={link.href}
            className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
            onClick={(e) => handleClick(e, link.href)}
            aria-current={activeSection === link.href.replace('#', '') ? 'page' : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;
