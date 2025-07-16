import React from 'react'
import EducationText from './EducationText'
import { education } from './EducationInfo'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const EducationMain = () => {
  return (
    <div>
      <motion.div
      variants={fadeIn("down", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}>
      <EducationText />
      
      <section
      
        className="py-32 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3 relative z-0"
      >
        
        <div className="relative z-10">
      
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#645550] h-full"></div>

        
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative mb-24 flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
            
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border-4 border-[#fb9718] w-12 h-12 rounded-full flex justify-center items-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              
              <div
                className={`w-full sm:w-[45%] mt-20 sm:mt-0 p-6 rounded-xl shadow-xl border border-[#fb9718] bg-[#53423e] backdrop-blur-md ${
                  index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'
                } hover:scale-105 hover:shadow-[0_0_20px_4px_#fb9718] transition-transform duration-300 z-0`}
              >
              
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-[#15d1e9]">{edu.degree}</h3>
                    <h4 className="text-sm font-bold text-[#d28422]">{edu.school}</h4>
                    <p className="text-sm text-[#898e8b]">{edu.date}</p>
                  </div>
                </div>

                <p className="text-sm text-white font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-sm text-white leading-relaxed">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </motion.div>
    </div>
  )
}

export default EducationMain