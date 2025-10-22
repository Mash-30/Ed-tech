import React from 'react'
import './WhyJoinSection.css'

const WhyJoinSection: React.FC = () => {
  const reasons = [
    {
      icon: '📋',
      title: 'Real Work Experience',
      description: 'Work on real-world development projects and build a portfolio that stands out to employers.'
    },
    {
      icon: '🔗',
      title: 'Guaranteed job referral',
      description: 'Get guaranteed job referrals from our network of 500+ companies, eliminating financial risk.'
    },
    {
      icon: '🏆',
      title: 'Crack FAANG Interview',
      description: 'Learn from mentors who work at top companies like Google, Amazon, and Microsoft.'
    }
  ]

  return (
    <section id="why-join" className="why-join">
      <div className="why-join-container">
        <div className="section-header">
          <p className="section-subtitle">RELATED COURSES</p>
          <h2 className="section-title">Why Join this Program?</h2>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoinSection
