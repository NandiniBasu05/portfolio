import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";


const NavbarBtn = () => {
  return (
    <div>
        <a
            href="https://drive.google.com/file/d/1E2IzbJXA4EFlUJHrVqm-0n_FrqLHAG3M/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
     <button 
     className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      Download Resume
         <div className="sm:hidden md:block">
      <LuArrowDownRight />
      </div>
      </button>
      </a>
    </div>
  )
}

export default NavbarBtn
