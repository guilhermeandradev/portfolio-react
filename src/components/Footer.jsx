import { useState, useCallback, useMemo } from 'react'
import './Footer.css'

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  const socialLinks = useMemo(() => [
    { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/guilhermeandradesv/' },
    { name: 'Email', icon: '✉️', url: 'mailto:guilhermeandradesv@gmail.com' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/5585989638663' }
  ], [])

  const handleMouseEnter = useCallback((index) => {
    setHoveredIcon(index)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoveredIcon(null)
  }, [])

  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`footer-icon ${hoveredIcon === index ? 'hovered' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <p className="footer-email">guilhermeandradesv@gmail.com</p>
          <p className="footer-phone">(85) 98963-8663</p>
          <p className="footer-location">São Paulo - SP</p>
        </div>
        <p className="footer-copyright">
          Copyright ©{currentYear} Guilherme Andrade. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
