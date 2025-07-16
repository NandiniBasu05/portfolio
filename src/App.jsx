import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroSection from './components/heroSection/SubHeroSection'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import EducationMain from './components/educationSection/EducationMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'

const App = () => {
  return (
    <div className="font-body overflow-hidden">
      <NavbarMain/>
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <ProjectsMain/>
      <EducationMain/>
      <ContactMeMain/>
      <FooterMain/>
      <HelperSection/>
    </div>
  )
}

export default App
