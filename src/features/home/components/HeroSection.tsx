import React, { useState, useCallback, memo } from 'react'
import './HeroSection.css'

interface FormData {
  name: string
  email: string
  phone: string
  course: string
}

interface HeroSectionProps {
  className?: string
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ className = '' }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    course: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In production, you would make an actual API call here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', course: '' })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }, [formData])

  return (
    <section id="hero" className={`hero ${className}`}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-subtitle">Specialization over generalization.</p>
            <h1 className="hero-title">Advanced Data Science & AI Course</h1>
            <p className="hero-description">
              Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors.
            </p>
            <p className="hero-highlight">Live Interactive Classes</p>
            <button 
              className="download-btn"
              aria-label="Download course brochure"
            >
              <span aria-hidden="true">📥</span>
              Download Brochure
            </button>
          </div>
          
          <div className="hero-right">
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                alt="Student learning data science and AI concepts" 
                loading="eager"
                width="400"
                height="400"
              />
            </div>
            
            <div id="contact-form" className="contact-form">
              <h3>We're here to help!</h3>
              <p>Please contact us in case of any query.</p>
              
              {submitStatus === 'success' && (
                <div className="form-success" role="alert" aria-live="polite">
                  ✅ Thank you! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="form-error" role="alert" aria-live="polite">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="sr-only">Your name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-label="Enter your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">Your email address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-label="Enter your email address"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="sr-only">Your phone number</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    aria-label="Enter your phone number"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="course" className="sr-only">Select course</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    aria-label="Select a course"
                    disabled={isSubmitting}
                  >
                    <option value="">Select Course</option>
                    <option value="data-science">Data Science & AI (Instructor: Michael Johnson)</option>
                    <option value="web-development">Web Development (Instructor: Sarah Williams)</option>
                    <option value="mobile-development">Mobile Development (Instructor: David Thompson)</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="form-submit-btn"
                  disabled={isSubmitting}
                  aria-label={isSubmitting ? 'Submitting form...' : 'Submit contact form'}
                >
                  {isSubmitting ? 'Submitting...' : 'Get in Touch'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = 'HeroSection'

export default HeroSection
