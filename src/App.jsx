import { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import PPLTraining from './components/PPLTraining'
import Fleet from './components/Fleet'
import Charter from './components/Charter'
import TrialFlights from './components/TrialFlights'
import Team from './components/Team'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Handle initial scroll position if URL contains a hash
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            const nav = document.querySelector('.navigation');
            const navHeight = nav ? nav.offsetHeight : 70;
            const offset = navHeight + 10;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    handleInitialHash();

    // Handle browser back/forward navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const nav = document.querySelector('.navigation');
          const navHeight = nav ? nav.offsetHeight : 70;
          const offset = navHeight + 10;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="app">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" role="main">
        <Hero />
        <PPLTraining />
        <Fleet />
        <Charter />
        <TrialFlights />
        <Team />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
