import './MobileMenuButton.css';

function MobileMenuButton({ isOpen, onClick }) {
  return (
    <button
      className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
}

export default MobileMenuButton;
