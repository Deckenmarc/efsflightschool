import './Section.css'

/**
 * Reusable Section component wrapper
 * Provides consistent spacing and backgrounds for content sections
 */
function Section({ id, backgroundColor, children, className = '', ariaLabel }) {
  return (
    <section 
      id={id} 
      className={`section ${className}`}
      style={{ backgroundColor }}
      aria-labelledby={ariaLabel ? undefined : `${id}-heading`}
      aria-label={ariaLabel}
    >
      <div className="section-container">
        {children}
      </div>
    </section>
  )
}

export default Section
