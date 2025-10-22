import React, { useState, useEffect } from 'react'
import './BackToTop.css'

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          <span className="arrow-up">↑</span>
          <span className="back-to-top-text">Back to Top</span>
        </button>
      )}
    </>
  )
}

export default BackToTop
