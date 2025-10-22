import React, { useState } from 'react'
import './ProjectsSection.css'

const ProjectsSection: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0)
  
  const projects = [
    {
      title: 'Authentication',
      company: 'Symantec',
      description: 'Create a secure authentication system using modern technologies and best practices for user management and security.',
      tools: ['Database', 'Server', 'Cloud']
    },
    {
      title: 'E-commerce Platform',
      company: 'Amazon',
      description: 'Build a full-stack e-commerce platform with payment integration, inventory management, and user analytics.',
      tools: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Data Analytics Dashboard',
      company: 'Google',
      description: 'Develop a real-time analytics dashboard for business intelligence and data visualization.',
      tools: ['Python', 'D3.js', 'PostgreSQL']
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-content">
          <div className="projects-left">
            <h2 className="projects-title">Hands-on Projects</h2>
            <div className="project-stats">
              <div className="stat-box green">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-box purple">
                <span className="stat-number">06+</span>
                <span className="stat-label">Domains</span>
              </div>
            </div>
            <div className="project-navigation">
              <button className="nav-btn" onClick={prevProject}>←</button>
              <button className="nav-btn" onClick={nextProject}>→</button>
            </div>
          </div>
          
          <div className="projects-right">
            <div className="project-card">
              <div className="project-header">
                <h3 className="project-title">{projects[currentProject].title}</h3>
                <div className="project-company">
                  <span className="company-check">✓</span>
                  <span className="company-name">{projects[currentProject].company}</span>
                </div>
              </div>
              <p className="project-description">
                {projects[currentProject].description}
              </p>
              <div className="project-tools">
                <span className="tools-label">Tools:</span>
                <div className="tools-list">
                  {projects[currentProject].tools.map((tool, index) => (
                    <span key={index} className="tool-item">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
