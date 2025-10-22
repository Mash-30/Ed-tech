import React from 'react'
import HeroSection from '../components/HeroSection'
import StatisticsSection from '../components/StatisticsSection'
import WhyJoinSection from '../components/WhyJoinSection'
import CoursesSection from '../components/CoursesSection'
import AlumniSection from '../components/AlumniSection'
import CurriculumSection from '../components/CurriculumSection'
import ProjectsSection from '../components/ProjectsSection'
import CourseFeesSection from '../components/CourseFeesSection'
import MentorsSection from '../components/MentorsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import './Home.css'

const Home: React.FC = () => {
  return (
    <div className="home">
      <HeroSection />
      <StatisticsSection />
      <WhyJoinSection />
      <CoursesSection />
      <AlumniSection />
      <CurriculumSection />
      <ProjectsSection />
      <CourseFeesSection />
      <MentorsSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}

export default Home
