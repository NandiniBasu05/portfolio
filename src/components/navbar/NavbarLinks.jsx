import React from 'react'
import { Link } from 'react-scroll'

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Education", section: "education" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body 
      lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] 
      lg:text-md sm:text-xl 
      bg-black/20 backdrop-blur-lg 
      sm:w-full py-4 px-6 rounded-full z-50">
      
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link 
            to={link.section}
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
