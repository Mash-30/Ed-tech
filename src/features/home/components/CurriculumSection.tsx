import React, { useState } from 'react'
import './CurriculumSection.css'

const CurriculumSection: React.FC = () => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    schedule: ''
  })

  const units = [
    'Unit 0 - Foundation Of Programming',
    'Unit 1 - Data Structures and Algorithms',
    'Unit 2 - Database Management Systems',
    'Unit 3 - Machine Learning Fundamentals',
    'Unit 4 - Deep Learning & Neural Networks',
    'Unit 5 - Data Science Projects & Portfolio'
  ]

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

  const toggleUnit = (index: number) => {
    setExpandedUnit(expandedUnit === index ? null : index)
  }

  return (
    <section id="curriculum" className="curriculum">
      <div className="curriculum-container">
        <div className="curriculum-content">
          <div className="curriculum-left">
            <div className="section-header">
              <p className="section-subtitle">A Roadmap for Success</p>
              <h2 className="section-title">Our Comprehensive curriculum, Designed for professionals.</h2>
            </div>
            
            <div className="course-description">
              <h3>Course Description</h3>
              <p>
                Our comprehensive Data Science & AI program is designed to take you from beginner to expert level. 
                You'll learn the latest tools and technologies used in the industry, work on real-world projects, 
                and get hands-on experience with machine learning and artificial intelligence.
              </p>
            </div>
            
            <div className="units-list">
              {units.map((unit, index) => (
                <div key={index} className="unit-item">
                  <button 
                    className="unit-header"
                    onClick={() => toggleUnit(index)}
                  >
                    <span className="unit-title">{unit}</span>
                    <span className={`unit-arrow ${expandedUnit === index ? 'expanded' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {expandedUnit === index && (
                    <div className="unit-content">
                      <p>Detailed curriculum content for {unit} will be displayed here...</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <button className="download-brochure-btn">
              <span>📥</span>
              Download Brochure
            </button>
          </div>
          
          <div className="curriculum-right">
            <div className="counseling-form">
              <div className="form-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop" alt="Counseling" />
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
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
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Schedule Date & Time</option>
                  <option value="weekend-morning">Weekend Morning (Sat-Sun 9AM-12PM)</option>
                  <option value="weekend-evening">Weekend Evening (Sat-Sun 6PM-9PM)</option>
                  <option value="weekday-evening">Weekday Evening (Mon-Fri 7PM-9PM)</option>
                </select>
                <div className="checkbox-container">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I agree to the terms and conditions</label>
                </div>
                <button type="submit" className="form-submit-btn">
                  Apply for Counselling
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CurriculumSection
