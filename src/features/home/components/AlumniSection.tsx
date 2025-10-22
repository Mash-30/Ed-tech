import React, { useState } from 'react'
import './AlumniSection.css'

const AlumniSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const alumni = [
    {
      name: 'Jennifer Martinez',
      role: 'Software Engineer Intern',
      description: 'Transformed from a non-tech background to landing a dream job at a top tech company.',
      progression: 'J.P. Morgan → Walmart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Robert Anderson',
      role: 'Data Scientist',
      description: 'Successfully transitioned from mechanical engineering to data science with our program.',
      progression: 'IBM → Microsoft',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      role: 'Full Stack Developer',
      description: 'From zero coding experience to becoming a full-stack developer at a startup.',
      progression: 'Accenture → Google',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]


  return (
    <section id="alumni" className="alumni">
      <div className="alumni-container">
        <div className="section-header">
          <p className="section-subtitle">Our Alumni Placed</p>
          <h2 className="section-title">Explore Our Alumni & Connect With Them.</h2>
        </div>
        
        <div className="alumni-carousel">
          <div className="alumni-cards">
            {alumni.map((alumnus, index) => (
              <div 
                key={index} 
                className={`alumni-card ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="alumni-image">
                  <img src={alumnus.image} alt={alumnus.name} />
                </div>
                <h3 className="alumni-name">{alumnus.name}</h3>
                <p className="alumni-role">{alumnus.role}</p>
                <p className="alumni-description">{alumnus.description}</p>
                <div className="alumni-progression">
                  <span className="progression-text">{alumnus.progression}</span>
                </div>
                <a href="#" className="read-review">
                  <span>Read full review</span>
                  <span className="linkedin-icon">💼</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="carousel-dots">
            {alumni.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <button className="connect-btn">Connect Now</button>
        </div>
      </div>
    </section>
  )
}

export default AlumniSection
