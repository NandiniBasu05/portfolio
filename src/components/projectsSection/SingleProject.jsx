import React, { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({
  name,
  year,
  align,          
  image,
  description,
  stack,           
  webLink,         
  codeLink,        
}) => {
  const [open, setOpen] = useState(false);


  const layout =
    align === "left"
      ? "md:flex-row md:justify-start"
      : "md:flex-row-reverse md:justify-start";

  return (
    <>
    
      <motion.div 
        variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full max-w-5xl mx-auto items-center gap-6 sm:flex-col ${layout}`}>
      
          <div className="max-h-[220px] max-w-[400px] md:w-[55%] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
          <img src={image} alt={`${name} screenshot`} className="h-full w-full object-cover" />
        </div>

      
        <div className="flex flex-col gap-3 w-full md:w-[45%]">
          <h2 className="text-2xl md:text-3xl text-orange">{name}</h2>
          <p className={`text-lg font-thin text-white ${align === "left" ? "md:text-left" : "md:text-right"}`}>
            {year}
          </p>

        
          <div
            className={`flex flex-wrap gap-3 ${
              align === "left" ? "md:justify-start" : "md:justify-end"
            }`}
          >
            
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 bg-orange/80 text-white font-semibold rounded hover:bg-orange transition-colors"
            >
              Description
            </button>

          
            {webLink && (
              <a
                href={webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-cyan hover:text-orange transition-colors"
              >
                View Web-app <BsFillArrowUpRightCircleFill />
              </a>
            )}

           
          </div>
        </div>
      </motion.div>

      
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}       
        >
          <div
            className="relative w-[90%] max-w-xl rounded-xl bg-[#53423e] p-6 text-white shadow-lg"
            onClick={(e) => e.stopPropagation()} 
          >
          
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-2xl hover:text-orange"
            >
              <IoMdClose />
            </button>

            <h3 className="text-2xl font-bold mb-4 text-[#fb9718]">{name}</h3>
            <p className="mb-6 leading-relaxed">{description}</p>

          
            {stack?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full
           bg-[#88e5f0] text-[#009fb3] border border-cyan-400/30
           shadow-sm"

                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-lg text-cyan hover:text-orange transition-colors"
              >
                <FaGithub className="text-2xl" /> View Code
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProject;
