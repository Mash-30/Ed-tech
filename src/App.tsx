import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './shared/components/Layout/Layout'
import ErrorBoundary from './shared/components/ErrorBoundary'
import Loading from './shared/components/Loading'
import './App.css'

// Lazy load pages for better performance
const Home = lazy(() => import('./features/home/pages/Home'))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<Loading fullScreen text="Loading My_Tutor Platform..." />}>
            <Routes>
              <Route 
                path="/" 
                element={
                  <ErrorBoundary>
                    <Home />
                  </ErrorBoundary>
                } 
              />
              {/* Add more routes here as features are developed */}
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App
