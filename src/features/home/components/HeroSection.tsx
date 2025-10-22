import React, { useState } from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-subtitle">Specialization over generalization.</p>
            <h1 className="hero-title">Advanced Data Science & AI Course</h1>
            <p className="hero-description">
              Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors.
            </p>
            <p className="hero-highlight">Live Interactive Classes</p>
            <button className="download-btn">
              <span>📥</span>
              Download Brochure
            </button>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" alt="Student learning" />
            </div>
            
            <div id="contact-form" className="contact-form">
              <h3>We're here to help!</h3>
              <p>Please contact us in case of any query.</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Course</option>
                  <option value="data-science">Data Science & AI (Instructor: Michael Johnson)</option>
                  <option value="web-development">Web Development (Instructor: Sarah Williams)</option>
                  <option value="mobile-development">Mobile Development (Instructor: David Thompson)</option>
                </select>
                <button type="submit" className="form-submit-btn">
                  Get in Touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
