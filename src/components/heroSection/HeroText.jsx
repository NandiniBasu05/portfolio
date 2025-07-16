import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {motion} from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
    const [typeEffect] = useTypewriter({
        words: ['Web Developer', 'Coder'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40
    })
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h1 
       variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase">Nandini Basu Majumder</motion.h1>
       <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
      <motion.span 
       variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      className="text-white">I am a <span className="text-cyan">{typeEffect}</span> </motion.span>
     
    </h3>
<motion.p 
variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
className="text-white text-lg">
        A Passionate Fullstack Developer and <br /> Machine Learning Enthusiast
      </motion.p>
    </div>
  );
};

export default HeroText;
