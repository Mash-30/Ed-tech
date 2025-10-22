import React from 'react'
import './CourseFeesSection.css'

const CourseFeesSection: React.FC = () => {
  return (
    <section id="course-fees" className="course-fees">
      <div className="course-fees-container">
        <div className="course-fees-content">
          <div className="fees-left">
            <h2 className="fees-title">Course Highlights</h2>
            <ul className="highlights-list">
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>300+ Live sessions</span>
              </li>
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>15+ Industry Projects</span>
              </li>
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>Lifetime accessibility</span>
              </li>
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>Live project experience</span>
              </li>
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>1-on-1 Mentorship</span>
              </li>
              <li className="highlight-item">
                <span className="check-icon">✓</span>
                <span>Job placement assistance</span>
              </li>
            </ul>
          </div>
          
          <div className="fees-center">
            <h2 className="fees-title">Course Fees</h2>
            <p className="fees-description">
              Flexible payment plans available to make quality education accessible to everyone.
            </p>
            <div className="price-info">
              <div className="main-price">Starting at $1,499 + Tax</div>
              <div className="emi-info">EMI starting from: $149/month</div>
            </div>
            <button className="apply-now-btn">Apply Now</button>
          </div>
          
          <div className="fees-right">
            <h2 className="fees-title">Next Cohort Details</h2>
            <div className="cohort-card">
              <div className="cohort-date">
                <span className="calendar-icon">📅</span>
                <span className="date-text">19th May</span>
              </div>
              <div className="batch-type">Weekend Batch (Sat - Sun)</div>
              <button className="join-now-btn">Join Now</button>
              
              <div className="batch-details">
                <div className="detail-row">
                  <span className="detail-label">Batch:</span>
                  <span className="detail-value">Morning</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Time:</span>
                  <span className="detail-value">09:00 am-12:00 pm</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Seat:</span>
                  <span className="detail-value available">Available</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Venue:</span>
                  <span className="detail-value">Virtual Hall</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseFeesSection
