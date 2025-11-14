import './BulletList.css'

/**
 * BulletList component with aviation-themed icons
 * Displays feature lists with plane icons
 */
function BulletList({ items, iconType = 'plane' }) {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={index} className="bullet-item">
          <span className={`bullet-icon bullet-icon-${iconType}`} aria-hidden="true">
            ✈
          </span>
          <span className="bullet-text">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default BulletList
