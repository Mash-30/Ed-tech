import React from 'react'
import './StatisticsSection.css'

const StatisticsSection: React.FC = () => {
  const stats = [
    {
      icon: '📈',
      number: '126%',
      description: '173% Average Salary Hike'
    },
    {
      icon: '💼',
      number: '100+',
      description: 'Job Placements'
    },
    {
      icon: '💻',
      number: 'Live',
      description: 'Interactive Sessions'
    }
  ]

  return (
    <section id="statistics" className="statistics">
      <div className="statistics-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
