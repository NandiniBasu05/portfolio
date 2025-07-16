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

const AllSkills = () => {
  return (
    <div className="w-auto overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 py-8 px-4 min-w-max justify-center items-center">
        {skills.map((item, index) => (
          <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
        ))}
      </div>
    </div>
  );
};

  


export default AllSkills
