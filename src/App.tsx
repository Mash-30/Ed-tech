import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './shared/components/Layout/Layout'
import Home from './features/home/pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as features are developed */}
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
