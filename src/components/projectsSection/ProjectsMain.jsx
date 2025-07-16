import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "WalletWise",
    year: "May 2025 - June 2025",
    align: "left",
    image: "../../public/images/walletwise.png",
    description: "A smart personal‑finance web-app that tracks spending patterns, has an AI receipt scanner, sends monthly financial report and valuable insights through mail, and nudges users to save more.",
    stack: ["NextJS", "TailwindCSS", "PostgreSQL", "Inngest", "Arcjet", "Supabase", "Clerk", "Vercel", "Gemini 1.5 Flash", "Shadcn UI"],
    webLink:  "https://wallet-wise-gold.vercel.app/",
    codeLink: "https://github.com/NandiniBasu05/walletwise",
  },
   {
    name: "AskAlly",
    year: "June 2025",
    align: "left",
    image: "../../public/images/askally.png",
    description: "AskAlly is an AI-powered career assistant that offers personalized job matching, resume and cover letter generation, interview preparation, skill assessment, and real-time industry insights for students.",
    stack: ["NextJS", "TailwindCSS", "PostgreSQL", "Inngest", "Neon", "Clerk", "Vercel", "Gemini 1.5 Flash", "Shadcn UI"],
    webLink:  "https://ask-ally.vercel.app/",
    codeLink: "https://github.com/NandiniBasu05/askally",
  },
  {
    name: "PassVault",
    year: "May 2025",
    align: "left",
    image: "../../public/images/passvault.png",
   description:
      "A zero‑knowledge password manager that stores encrypted credentials in your own browser (no cloud).",
    stack: ["ReactJS", "TailwindCSS", "MongoDB", "Netlify"],
     webLink: "https://passvault-pass-manager.netlify.app/",
     codeLink: "https://github.com/NandiniBasu05/passvault",
  },
]
const ProjectsMain = () => {
  return (
    <div  id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
       variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>
      <ProjectsText/>
      </motion.div>
       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
         {projects.map((project, index) => {
          return (
      <SingleProject
       key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              description= {project.description}
              stack= {project.stack}
              webLink= {project.webLink}
              codeLink={project.codeLink}
              />
          );
        })}
      </div>
    </div>
  )
}

export default ProjectsMain
