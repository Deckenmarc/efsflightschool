import Section from '../Section'
import FleetCard from './FleetCard'
import { fleetData } from '../../data/fleetData'
import './Fleet.css'

/**
 * Fleet section component displaying aircraft fleet
 */
function Fleet() {
  return (
    <Section id="fleet" backgroundColor="#FBF7E4" className="fleet-section">
      <h2 id="fleet-heading" className="section-title">Unsere Flotte</h2>
      <p className="section-description">
        Unsere moderne Flotte bietet Ihnen die perfekte Plattform für Ihre Pilotenausbildung 
        und Charterflüge. Alle Flugzeuge sind bestens gewartet und mit modernster Avionik ausgestattet.
      </p>
      <div className="fleet-grid">
        {fleetData.map((aircraft) => (
          <FleetCard key={aircraft.id} aircraft={aircraft} />
        ))}
      </div>
    </Section>
  )
}

export default Fleet
