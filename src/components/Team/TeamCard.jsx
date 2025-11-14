import { useState } from 'react'
import './TeamCard.css'

/**
 * TeamCard component displays individual team member profile
 */
function TeamCard({ member }) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  if (!member) return null

  return (
    <div className="team-card">
      <img 
        src={imageError ? '/src/media/placeholder-team.jpg' : member.photo}
        alt={member.photoAlt}
        className="team-photo"
        width="200"
        height="200"
        loading="lazy"
        onError={handleImageError}
      />
      <h3 className="team-name">{member.name}</h3>
      <p className="team-title">{member.title}</p>
      <p className="team-description">{member.description}</p>
    </div>
  )
}

export default TeamCard
