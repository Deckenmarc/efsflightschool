import Section from '../Section'
import LocationCard from './LocationCard'
import { locationData } from '../../data/locationData'
import './Locations.css'

/**
 * Locations section component displaying flight school locations
 */
function Locations() {
  return (
    <Section id="standorte" backgroundColor="#FFFFFF" className="locations-section">
      <h2 id="standorte-heading" className="section-title">Standorte</h2>
      <div className="locations-grid">
        {locationData.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </Section>
  )
}

export default Locations
