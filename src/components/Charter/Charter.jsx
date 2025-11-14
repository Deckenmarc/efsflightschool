import './Charter.css'
import Section from '../Section'
import charterImage400 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-400.jpg'
import charterImage800 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-800.jpg'
import charterImage1200 from '../../media/optimized/PHOTO-2022-07-09-19-45-06-1200.jpg'

/**
 * Charter section component
 * Displays information about aircraft charter services
 */
function Charter() {
  return (
    <Section id="charter" backgroundColor="#FFFFFF" className="charter">
      <div className="charter-content">
        <div className="charter-text">
          <h2 id="charter-heading" className="charter-title">Flugzeugcharter</h2>
          <p className="charter-description">
            Mieten Sie eines unserer modernen Flugzeuge für Ihre individuellen Flugbedürfnisse. 
            Ob Sie selbst fliegen möchten oder mit einem unserer erfahrenen Fluglehrer unterwegs 
            sein wollen – wir bieten flexible Charter-Optionen für Geschäftsreisen, private Ausflüge 
            oder besondere Anlässe. Unsere Flotte steht Ihnen an beiden Standorten zur Verfügung 
            und ermöglicht maximale Flexibilität bei der Reiseplanung.
          </p>
          <p className="charter-description">
            Genießen Sie die Freiheit des privaten Fliegens mit unseren gut gewarteten Flugzeugen. 
            Egal ob VFR oder IFR, Kurzstrecke oder Langstrecke – wir haben das passende Flugzeug 
            für Ihre Anforderungen.
          </p>
        </div>
        <div className="charter-image-wrapper">
          <img 
            src={charterImage800} 
            srcSet={`${charterImage400} 400w, ${charterImage800} 800w, ${charterImage1200} 1200w`}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Professional pilot preparing modern charter aircraft for departure at EFS Flightschool"
            className="charter-image"
            width="800"
            height="600"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

export default Charter
