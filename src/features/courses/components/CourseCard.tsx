import React from 'react'
import './CourseCard.css'

interface Course {
  id: string
  title: string
  description: string
  instructor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  price: number
  image?: string
}

interface CourseCardProps {
  course: Course
  onEnroll: (courseId: string) => void
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onEnroll }) => {
  return (
    <div className="course-card">
      {course.image && (
        <div className="course-image">
          <img src={course.image} alt={course.title} />
        </div>
      )}
      <div className="course-content">
        <div className="course-header">
          <h3 className="course-title">{course.title}</h3>
          <span className={`course-level course-level-${course.level.toLowerCase()}`}>
            {course.level}
          </span>
        </div>
        <p className="course-description">{course.description}</p>
        <div className="course-meta">
          <span className="course-instructor">👨‍🏫 {course.instructor}</span>
          <span className="course-duration">⏱️ {course.duration}</span>
        </div>
        <div className="course-footer">
          <span className="course-price">${course.price}</span>
          <button 
            className="btn-enroll"
            onClick={() => onEnroll(course.id)}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
