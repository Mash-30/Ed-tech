import React from 'react'
import './CoursesSection.css'

const CoursesSection: React.FC = () => {
  const courses = [
    {
      id: 'data-science',
      title: 'Advanced Data Science & AI',
      description: 'Master data science and artificial intelligence with hands-on projects and real-world applications.',
      instructor: 'Michael Johnson',
      duration: '6 Months',
      level: 'Advanced',
      price: 1499,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      features: ['300+ Live Sessions', '15+ Projects', '1-on-1 Mentorship', 'Job Placement']
    },
    {
      id: 'web-development',
      title: 'Full Stack Web Development',
      description: 'Learn modern web development with React, Node.js, and cloud technologies.',
      instructor: 'Sarah Williams',
      duration: '4 Months',
      level: 'Intermediate',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      features: ['200+ Live Sessions', '12+ Projects', 'Portfolio Building', 'Industry Mentors']
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications for iOS and Android.',
      instructor: 'David Thompson',
      duration: '5 Months',
      level: 'Intermediate',
      price: 1399,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      features: ['250+ Live Sessions', '10+ Apps', 'App Store Deployment', 'UI/UX Design']
    }
  ]

  const handleEnroll = (courseId: string) => {
    console.log(`Enrolling in course: ${courseId}`)
    // Scroll to contact form or open enrollment modal
    const contactSection = document.getElementById('contact-form')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="courses" className="courses">
      <div className="courses-container">
        <div className="section-header">
          <p className="section-subtitle">OUR COURSES</p>
          <h2 className="section-title">Choose Your Path to Success</h2>
          <p className="section-description">
            Transform your career with our industry-leading courses designed by experts from top tech companies.
          </p>
        </div>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <div className="course-level-badge">
                  <span className={`level-badge level-${course.level.toLowerCase()}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="course-content">
                <div className="course-header">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-price">${course.price}</div>
                </div>
                
                <p className="course-description">{course.description}</p>
                
                <div className="course-meta">
                  <div className="meta-item">
                    <span className="meta-icon">👨‍🏫</span>
                    <span className="meta-text">{course.instructor}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span className="meta-text">{course.duration}</span>
                  </div>
                </div>
                
                <div className="course-features">
                  {course.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="course-actions">
                  <button 
                    className="btn-enroll"
                    onClick={() => handleEnroll(course.id)}
                  >
                    Enroll Now
                  </button>
                  <button className="btn-details">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="courses-cta">
          <p className="cta-text">Not sure which course is right for you?</p>
          <button className="btn-consultation">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
