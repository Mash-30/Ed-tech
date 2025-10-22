import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">🎓</div>
              <span className="logo-text">My_Tutor</span>
            </div>
            <p className="footer-description">
              Empowering learners with cutting-edge technology education and industry-relevant skills 
              to build successful careers in the digital world.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">📘</a>
              <a href="#" className="social-link">💼</a>
              <a href="#" className="social-link">📌</a>
              <a href="#" className="social-link">🐦</a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#campus">Campus Program</a></li>
              <li><a href="#mentor">Become a Mentor</a></li>
              <li><a href="#contact">Contact us</a></li>
              <li><a href="#hire">Hire From us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of use</a></li>
              <li><a href="#refund">Refund Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info">
              <p>📍 123 Education Street, Tech City, TC 12345</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@mytutor.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright 2024 My_Tutor | Designed By Shubham Modi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
