import './Hero.css'
import heroBackground400 from '../../media/optimized/background-1-min-400.jpg'
import heroBackground800 from '../../media/optimized/background-1-min-800.jpg'
import heroBackground1200 from '../../media/optimized/background-1-min-1200.jpg'

function Hero() {
  return (
    <section id="home" className="hero" aria-label="Welcome to EFS Flightschool">
      <picture className="hero-background">
        <source media="(max-width: 767px)" srcSet={heroBackground400} />
        <source media="(max-width: 1023px)" srcSet={heroBackground800} />
        <img 
          src={heroBackground1200}
          srcSet={`${heroBackground400} 400w, ${heroBackground800} 800w, ${heroBackground1200} 1200w`}
          sizes="100vw"
          alt="Modern aircraft flying over scenic landscape, representing EFS Flightschool's training fleet"
          className="hero-background-image"
          width="1200"
          height="900"
        />
      </picture>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">
            EFS Flightschool – Privatpiloten-Ausbildung und Flugerlebnis
          </h1>
          <p className="hero-subtext">
            Ganzjährige Pilotenausbildung, Charter, Schnupperflüge – ab Stuttgart und Mallorca
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
