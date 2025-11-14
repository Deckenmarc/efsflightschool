import './Footer.css'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <nav className="footer-links" aria-label="Legal information">
          <a href="#agb" className="footer-link" aria-label="Terms and Conditions (AGB)">AGB</a>
          <a href="#datenschutz" className="footer-link" aria-label="Privacy Policy (Datenschutz)">Datenschutz</a>
          <a href="#impressum" className="footer-link" aria-label="Imprint (Impressum)">Impressum</a>
        </nav>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} EFS Flightschool. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
