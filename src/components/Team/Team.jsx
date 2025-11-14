import Section from '../Section'
import TeamCard from './TeamCard'
import { teamData } from '../../data/teamData'
import './Team.css'

/**
 * Team section component displaying team member profiles
 */
function Team() {
  return (
    <Section id="team" backgroundColor="#FBF7E4" className="team-section">
      <h2 id="team-heading" className="section-title">Unser Team</h2>
      <div className="team-grid">
        {teamData.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  )
}

export default Team
