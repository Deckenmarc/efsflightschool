import './PPLTraining.css'
import Section from '../Section'
import BulletList from '../BulletList'
import trainingImage400 from '../../media/optimized/20200308_150316-1-1-scaled-400.jpg'
import trainingImage800 from '../../media/optimized/20200308_150316-1-1-scaled-800.jpg'
import trainingImage1200 from '../../media/optimized/20200308_150316-1-1-scaled-1200.jpg'

/**
 * PPL Training section component
 * Displays information about the PPL-365 training program
 */
function PPLTraining() {
  const trainingFeatures = [
    'Theoriekurse & Praxis das ganze Jahr',
    'Schulung auf modernen Flugzeugen',
    'Internationale Flughäfen',
    'BZF-I (Englisch) Nachtflugberechtigung',
    'Sprechfunk auf FR und ES'
  ]

  return (
    <Section id="ppl-ausbildung" backgroundColor="#F5FAFF" className="ppl-training">
      <div className="ppl-training-content">
        <div className="ppl-training-text">
          <h2 id="ppl-ausbildung-heading" className="ppl-training-title">PPL-Ausbildung (Private Pilot License)</h2>
          <p className="ppl-training-description">
            Unsere PPL-365 Ausbildung bietet Ihnen die Möglichkeit, das ganze Jahr über Ihre 
            Privatpilotenlizenz zu erwerben. Mit flexiblen Kurszeiten, modernen Flugzeugen und 
            erfahrenen Fluglehrern begleiten wir Sie auf Ihrem Weg zum Privatpiloten. Die Ausbildung 
            umfasst theoretische Kurse sowie praktische Flugstunden an unseren Standorten in 
            Stuttgart und Mallorca.
          </p>
          <BulletList items={trainingFeatures} iconType="plane" />
        </div>
        <div className="ppl-training-image-wrapper">
          <img 
            src={trainingImage800} 
            srcSet={`${trainingImage400} 400w, ${trainingImage800} 800w, ${trainingImage1200} 1200w`}
            sizes="(max-width: 767px) 100vw, 50vw"
            alt="Flight instructor teaching student pilot in modern aircraft cockpit during PPL training session"
            className="ppl-training-image"
            width="800"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}

export default PPLTraining
