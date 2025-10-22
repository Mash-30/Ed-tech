import React, { memo } from 'react'
import './Loading.css'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  text?: string
  className?: string
  fullScreen?: boolean
}

const Loading: React.FC<LoadingProps> = memo(({ 
  size = 'medium', 
  text = 'Loading...', 
  className = '',
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'loading-small',
    medium: 'loading-medium',
    large: 'loading-large'
  }

  const content = (
    <div className={`loading ${sizeClasses[size]} ${className}`} role="status" aria-live="polite">
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && (
        <p className="loading-text" aria-label={text}>
          {text}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="loading-overlay" role="dialog" aria-modal="true" aria-label="Loading content">
        {content}
      </div>
    )
  }

  return content
})

Loading.displayName = 'Loading'

export default Loading
