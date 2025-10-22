import React, { useState, useEffect, useCallback, memo } from 'react'
import './BackToTop.css'

interface BackToTopProps {
  threshold?: number
  className?: string
}

const BackToTop: React.FC<BackToTopProps> = memo(({ 
  threshold = 300, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    setIsVisible(scrollTop > threshold)
  }, [threshold])

  useEffect(() => {
    // Use passive listener for better performance
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    
    // Check initial state
    toggleVisibility()
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [toggleVisibility])

  const scrollToTop = useCallback(() => {
    // Use requestAnimationFrame for smoother animation
    const scrollToTopAnimation = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTopAnimation)
        window.scrollTo(0, currentScroll - (currentScroll / 8))
      }
    }
    
    scrollToTopAnimation()
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      scrollToTop()
    }
  }, [scrollToTop])

  if (!isVisible) {
    return null
  }

  return (
    <button 
      className={`back-to-top ${className}`}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      aria-label="Scroll to top of page"
      title="Back to top"
      type="button"
    >
      <span className="arrow-up" aria-hidden="true">↑</span>
      <span className="back-to-top-text">Back to Top</span>
    </button>
  )
})

BackToTop.displayName = 'BackToTop'

export default BackToTop
