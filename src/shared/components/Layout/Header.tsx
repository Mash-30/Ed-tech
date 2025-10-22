import React, { useState, useCallback, useEffect } from 'react'
import './Header.css'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }, [])

  const handleApplyNow = useCallback(() => {
    const contactSection = document.getElementById('contact-form') || document.querySelector('.contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }, [scrollToSection])

  return (
    <header 
      className={`header ${isScrolled ? 'header-scrolled' : ''} ${className}`}
      role="banner"
    >
      <div className="header-container">
        <div 
          className="logo" 
          onClick={() => scrollToSection('hero')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              scrollToSection('hero')
            }
          }}
          aria-label="My_Tutor - Go to homepage"
        >
          <div className="logo-icon" aria-hidden="true">🎓</div>
          <span className="logo-text">My_Tutor</span>
        </div>
        
        <nav 
          className={`nav ${isMenuOpen ? 'nav-open' : ''}`}
          role="navigation"
          aria-label="Main navigation"
        >
          <a 
            href="#hero" 
            className="nav-link" 
            onClick={(e) => handleNavClick(e, 'hero')}
            aria-label="Navigate to Home section"
          >
            Home
          </a>
          <a 
            href="#courses" 
            className="nav-link" 
            onClick={(e) => handleNavClick(e, 'courses')}
            aria-label="Navigate to Courses section"
          >
            Courses
          </a>
          <a 
            href="#mentors" 
            className="nav-link" 
            onClick={(e) => handleNavClick(e, 'mentors')}
            aria-label="Navigate to Mentors section"
          >
            Mentors
          </a>
          <a 
            href="#testimonials" 
            className="nav-link" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            aria-label="Navigate to Testimonials section"
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="nav-link" 
            onClick={(e) => handleNavClick(e, 'faq')}
            aria-label="Navigate to FAQ section"
          >
            FAQ
          </a>
        </nav>
        
        <button 
          className="apply-btn" 
          onClick={handleApplyNow}
          aria-label="Apply for course enrollment"
        >
          Apply Now
        </button>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-open' : ''}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
  )
}

export default Header
