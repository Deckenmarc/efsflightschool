import Section from '../Section'
import './Contact.css'
import { colors } from '../../data/constants'

/**
 * Contact component displaying contact information
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6
 */
function Contact() {
  const contactData = {
    email: 'contact@efsflightschool.com',
    phones: [
      { number: '+49 711 720 714 87', display: '+49 711 720 714 87' },
      { number: '+49 171 65 02 219', display: '+49 171 65 02 219' }
    ]
  }

  return (
    <Section id="kontakt" backgroundColor={colors.primary} className="contact">
      <div className="contact-content">
        <h2 id="kontakt-heading" className="contact-title">Kontakt</h2>
        
        <div className="contact-info">
          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
              <title>Email icon</title>
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={`mailto:${contactData.email}`} className="contact-link" aria-label={`Send email to ${contactData.email}`}>
              {contactData.email}
            </a>
          </div>

          <div className="contact-item">
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
              <title>Phone icon</title>
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="contact-phones">
              {contactData.phones.map((phone, index) => (
                <a 
                  key={index}
                  href={`tel:${phone.number.replace(/\s/g, '')}`} 
                  className="contact-link"
                  aria-label={`Call ${phone.display}`}
                >
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-image-container">
          <svg className="contact-illustration" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img">
            <title>Contact confirmation illustration</title>
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
            <path d="M60 100L80 120L140 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
          </svg>
        </div>
      </div>
    </Section>
  )
}

export default Contact
