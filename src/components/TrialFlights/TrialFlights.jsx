import './TrialFlights.css'
import Section from '../Section'
import BulletList from '../BulletList'
import trialFlightImage400 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-400.jpg'
import trialFlightImage800 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-800.jpg'
import trialFlightImage1200 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-1200.jpg'

/**
 * Trial Flights section component
 * Displays information about trial flight experiences
 */
function TrialFlights() {
  const trialFlightFeatures = [
    'Familiärer Rundflug oder Gruppenerlebnis',
    'Individuelle Termine, mehrmals täglich'
  ]

  return (
    <Section id="trialflights" backgroundColor="#F5FAFF" className="trial-flights">
      <div className="trial-flights-content">
        <div className="trial-flights-text">
          <h2 id="trialflights-heading" className="trial-flights-title">Trialflights/Schnupperflug</h2>
          <p className="trial-flights-description">
            Erleben Sie die Faszination des Fliegens bei einem 60-minütigen Schnupperflug! 
            Ob von Mallorca oder Stuttgart – genießen Sie atemberaubende Ausblicke und das 
            einzigartige Gefühl, selbst am Steuer eines Flugzeugs zu sitzen. Unsere erfahrenen 
            Piloten begleiten Sie sicher durch Ihren ersten Flug und beantworten alle Ihre Fragen. 
            Perfekt als Geschenk oder für alle, die schon immer mal fliegen wollten.
          </p>
          <BulletList items={trialFlightFeatures} iconType="plane" />
        </div>
        <div className="trial-flights-image-wrapper">
          <img 
            src={trialFlightImage800} 
            srcSet={`${trialFlightImage400} 400w, ${trialFlightImage800} 800w, ${trialFlightImage1200} 1200w`}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Cockpit view during trial flight showing instruments and scenic landscape through windscreen"
            className="trial-flights-image"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

export default TrialFlights
