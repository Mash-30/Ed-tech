import React, { useState } from 'react'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

  const handleApplyNow = () => {
    const contactSection = document.getElementById('contact-form') || document.querySelector('.contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <div className="logo-icon">🎓</div>
          <span className="logo-text">My_Tutor</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}>Home</a>
          <a href="#courses" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('courses') }}>Courses</a>
          <a href="#mentors" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('mentors') }}>Mentors</a>
          <a href="#testimonials" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Testimonials</a>
          <a href="#faq" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('faq') }}>FAQ</a>
        </nav>
        
        <button className="apply-btn" onClick={handleApplyNow}>Apply Now</button>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
