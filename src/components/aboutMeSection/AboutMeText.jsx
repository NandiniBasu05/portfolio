import React from 'react'
import {Link} from 'react-scroll';

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
        <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className="text-white text-2xl">I am a dedicated B.Tech student specializing in Computer Science with a strong academic background. 
            I have hands-on experience in building modern web applications using Next.js and various backend technologies. 
            My passion for programming drives me to continually learn and improve my skills, especially in full-stack development.
            Additionally, I have a deep interest in machine learning, and I actively explore its applications and concepts alongside my core development work, aiming to integrate intelligent features into future projects. 
            I pride myself on my problem-solving abilities and effective communication skills that enhance team collaboration.

</p>
 <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  )
}

export default AboutMeText
