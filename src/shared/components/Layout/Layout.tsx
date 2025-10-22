import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../BackToTop'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default Layout
