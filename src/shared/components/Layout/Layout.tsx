import React, { memo, Suspense, lazy } from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

// Lazy load BackToTop component for better performance
const BackToTop = lazy(() => import('../BackToTop'))

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = memo(({ children, className = '' }) => {
  return (
    <div className={`layout ${className}`}>
      <Header />
      <main className="layout-main" role="main">
        <Suspense fallback={<div className="loading-spinner" aria-label="Loading content">Loading...</div>}>
          {children}
        </Suspense>
      </main>
      <Footer />
      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
