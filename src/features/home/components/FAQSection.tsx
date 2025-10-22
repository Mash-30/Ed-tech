import React, { useState } from 'react'
import './FAQSection.css'

const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How to enroll for a Course?',
      answer: 'You can enroll for any course by clicking the "Apply Now" button on our website, filling out the application form, and completing the payment process. Our team will contact you within 24 hours to confirm your enrollment.'
    },
    {
      question: 'What is the duration of the Data Science course?',
      answer: 'The Data Science & AI course is designed to be completed in 6 months with live interactive sessions on weekends. The program includes 300+ live sessions, 15+ industry projects, and lifetime access to course materials.'
    },
    {
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we provide comprehensive job placement assistance including resume building, interview preparation, and guaranteed job referrals from our network of 500+ companies. Our placement team works closely with students to help them land their dream jobs.'
    },
    {
      question: 'What are the prerequisites for the course?',
      answer: 'No prior programming experience is required. Our course starts from the basics and gradually builds up to advanced concepts. However, having a basic understanding of mathematics and logical thinking will be helpful.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <div className="section-header">
          <p className="section-subtitle">ASK YOUR QUESTIONS</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="plus-icon">+</span>
                <span className="question-text">{faq.question}</span>
              </button>
              {expandedFAQ === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
