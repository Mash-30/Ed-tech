import React, { useState } from 'react'
import './MentorsSection.css'

const MentorsSection: React.FC = () => {
  const [currentMentor, setCurrentMentor] = useState(0)
  
  const mentors = [
    {
      name: 'Michael Johnson',
      role: 'Managing Director',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sarah Williams',
      role: 'Senior Data Scientist',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'David Thompson',
      role: 'AI Research Lead',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <section id="mentors" className="mentors">
      <div className="mentors-container">
        <div className="section-header">
          <p className="section-subtitle">DISCOVER OUR MENTORS</p>
          <h2 className="section-title">
            We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation.
          </h2>
        </div>
        
        <div className="mentors-carousel">
          <div className="mentors-grid">
            {mentors.map((mentor, index) => (
              <div key={index} className="mentor-card">
                <div className="mentor-image">
                  <img src={mentor.image} alt={mentor.name} />
                </div>
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
                <div className="mentor-company">
                  <span className="company-logo">🏢</span>
                  <span className="company-name">{mentor.company}</span>
                </div>
                <a href="#" className="view-profile">
                  <span>View Profile</span>
                  <span className="linkedin-icon">💼</span>
                </a>
              </div>
            ))}
          </div>
          
          <div className="mentor-dots">
            {mentors.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentMentor ? 'active' : ''}`}
                onClick={() => setCurrentMentor(index)}
              />
            ))}
          </div>
          
          <button className="more-mentors-btn">More Mentor Details</button>
        </div>
      </div>
    </section>
  )
}

export default MentorsSection
