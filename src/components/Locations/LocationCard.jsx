import { useState } from 'react'
import './LocationCard.css'

/**
 * LocationCard component displays individual location information
 */
function LocationCard({ location }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  if (!location) return null

  // Generate srcset for responsive images
  const generateSrcSet = (imagePath) => {
    if (!imagePath || imageError) return ''
    const basePath = imagePath.replace(/\.(jpg|jpeg)$/i, '')
    return `${basePath}-400.jpg 400w, ${basePath}-800.jpg 800w, ${basePath}-1200.jpg 1200w`
  }

  const imageSrc = imageError ? '/src/media/placeholder-location.jpg' : location.image
  const srcSet = location.image ? generateSrcSet(location.image) : ''

  return (
    <div className="location-card">
      {location.image && (
        <img 
          src={imageSrc}
          srcSet={srcSet}
          sizes="(max-width: 767px) 100vw, 50vw"
          alt={`${location.name} airport facility - EFS Flightschool training location`}
          className="location-image"
          width="800"
          height="450"
          loading="lazy"
          onError={handleImageError}
        />
      )}
      <div className="location-content">
        <h3 className="location-name">{location.name}</h3>
        <p className="location-icao">
          <strong>ICAO:</strong> {location.icao}
        </p>
        <p className="location-address">{location.address}</p>
        {location.description && (
          <p className="location-description">{location.description}</p>
        )}
      </div>
    </div>
  )
}

export default LocationCard
