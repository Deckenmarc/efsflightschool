import './Logo.css';

function Logo() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#home" 
      className="logo"
      onClick={scrollToTop}
      aria-label="EFS Flightschool - Go to homepage"
    >
      <span className="logo-text">EFS</span>
      <span className="logo-subtext">Flightschool</span>
    </a>
  );
}

export default Logo;
