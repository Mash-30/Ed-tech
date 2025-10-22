import React, { memo } from 'react'
import './Footer.css'

interface FooterProps {
  className?: string
}

interface SocialLink {
  href: string
  label: string
  icon: string
  ariaLabel: string
}

interface FooterLink {
  href: string
  label: string
  external?: boolean
}

const Footer: React.FC<FooterProps> = memo(({ className = '' }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks: SocialLink[] = [
    {
      href: 'https://facebook.com/mytutor.edtech',
      label: 'Facebook',
      icon: '📘',
      ariaLabel: 'Follow us on Facebook'
    },
    {
      href: 'https://linkedin.com/company/my-tutor',
      label: 'LinkedIn',
      icon: '💼',
      ariaLabel: 'Connect with us on LinkedIn'
    },
    {
      href: 'https://pinterest.com/mytutor',
      label: 'Pinterest',
      icon: '📌',
      ariaLabel: 'Follow us on Pinterest'
    },
    {
      href: 'https://twitter.com/mytutor_edtech',
      label: 'Twitter',
      icon: '🐦',
      ariaLabel: 'Follow us on Twitter'
    }
  ]

  const exploreLinks: FooterLink[] = [
    { href: '#about', label: 'About Us' },
    { href: '#blog', label: 'Blog' },
    { href: '#campus', label: 'Campus Program' },
    { href: '#mentor', label: 'Become a Mentor' },
    { href: '#contact', label: 'Contact us' },
    { href: '#hire', label: 'Hire From us' }
  ]

  const usefulLinks: FooterLink[] = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-use', label: 'Terms of use' },
    { href: '/refund-policy', label: 'Refund Policy' }
  ]

  const handleSocialClick = (_e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Analytics tracking could be added here
    console.log('Social link clicked:', href)
  }

  return (
    <footer className={`footer ${className}`} role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon" aria-hidden="true">🎓</div>
              <span className="logo-text">My_Tutor</span>
            </div>
            <p className="footer-description">
              Empowering learners with cutting-edge technology education and industry-relevant skills 
              to build successful careers in the digital world.
            </p>
            <div className="social-links" role="list" aria-label="Social media links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="social-link"
                  aria-label={link.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(e, link.href)}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <span className="sr-only">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links" role="list">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links" role="list">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    aria-label={`Navigate to ${link.label}`}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>
                <span aria-hidden="true">📍</span>
                <span>123 Education Street, Tech City, TC 12345</span>
              </p>
              <p>
                <span aria-hidden="true">📞</span>
                <a href="tel:+15551234567" aria-label="Call us at +1 (555) 123-4567">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:info@mytutor.com" aria-label="Email us at info@mytutor.com">
                  info@mytutor.com
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            Copyright {currentYear} My_Tutor | Designed By Shubham Modi
          </p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
