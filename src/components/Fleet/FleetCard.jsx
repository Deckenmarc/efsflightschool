import { useState } from 'react'
import './FleetCard.css'

/**
 * FleetCard component displays individual aircraft specifications
 */
function FleetCard({ aircraft }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  if (!aircraft) return null

  // Generate srcset for responsive images
  const generateSrcSet = (imagePath) => {
    if (!imagePath || imageError) return ''
    const basePath = imagePath.replace(/\.(jpg|jpeg)$/i, '')
    return `${basePath}-400.jpg 400w, ${basePath}-800.jpg 800w, ${basePath}-1200.jpg 1200w`
  }

  const imageSrc = imageError ? '/src/media/placeholder-aircraft.jpg' : aircraft.image
  const srcSet = generateSrcSet(aircraft.image)

  return (
    <div className="fleet-card">
      <img 
        src={imageSrc}
        srcSet={srcSet}
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 30vw"
        alt={aircraft.imageAlt}
        className="fleet-image"
        width="800"
        height="450"
        loading="lazy"
        onError={handleImageError}
      />
      <h3 className="fleet-name">{aircraft.name || 'Aircraft Name'}</h3>
      <div className="fleet-specs">
        <p><strong>Power:</strong> {aircraft.power}</p>
        <p><strong>Capabilities:</strong> {aircraft.capabilities.join(', ')}</p>
        <p><strong>Seats:</strong> {aircraft.seats}</p>
      </div>
    </div>
  )
}

export default FleetCard
