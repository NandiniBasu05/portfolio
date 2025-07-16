import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io"; 
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const skills = [ 
{
    skill: "Python",
    icon: FaPython,
  },
{
    skill: "Cpp",
    icon: TbBrandCpp,
  },
{
    skill: "Java",
    icon: FaJava,
  },
{
    skill: "HTML",
    icon : FaHtml5,
},
{
    skill: "CSS",
    icon: FaCss3Alt,
  },
 {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ExpressJS",
    icon: SiExpress,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
{
    skill: "Django",
    icon: SiDjango,
  },
  {
    skill: "MySql",
    icon: GrMysql,
  },
 {
    skill: "MongoDB",
    icon: SiMongodb,
  },

]

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
         {skills.map((item, index) => {
           return (
            <div  key={index} className="flex flex-col items-center">
               <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
    </div>
  );
})}
</div>
  )
}

export default AllSkillsSM
