import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSM from './AllSkillsSM'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="w-screen overflow-x-auto">
        <motion.div
         variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}>
<SkillsText/>
</motion.div>
      <div className="lg:block sm:hidden">
      <AllSkills/>
      </div>
      <div className="sm-block lg:hidden">
        <AllSkillsSM/>
      </div>
      </div>
    </div>
  )
}

export default SkillsMain
