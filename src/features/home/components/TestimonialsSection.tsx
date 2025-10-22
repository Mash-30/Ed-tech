import React from 'react'
import './TestimonialsSection.css'

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-left">
            <h2 className="testimonials-title">Thousands of stories of growth.</h2>
            <p className="testimonials-subtitle">
              Find out how our Learners transformed their careers after learning with us.
            </p>
          </div>
          
          <div className="testimonials-right">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <blockquote className="testimonial-text">
                "The program completely transformed my career. From being a mechanical engineer to becoming a data scientist at Microsoft, 
                the journey was incredible. The mentors were amazing and the hands-on projects gave me real-world experience."
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">James Wilson</h4>
                  <div className="author-rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>
                <a href="#" className="view-profile">
                  <span>View Profile</span>
                  <span className="linkedin-icon">💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
