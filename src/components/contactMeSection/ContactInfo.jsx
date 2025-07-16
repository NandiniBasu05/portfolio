import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="flex gap-6 items-center justify-center text-4xl text-orange">
       <a
    href="mailto:nandinibasu240105@gmail.com"
    className="hover:text-[#15d1e9] transition-colors duration-300" cursor-pointer
    target="_blank"
  >
      <HiOutlineMail/></a>

<a className="hover:text-[#15d1e9] transition-colors duration-300"  target="_blank" cursor-pointer
  href="https://www.google.com/maps/place/Nadia,+West+Bengal">
      <IoLocationOutline  /></a>

      
      <a
        href="https://www.linkedin.com/in/nandini-basu-4b7411342" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#15d1e9] transition-colors duration-300"
      >
        <CiLinkedin className="cursor-pointer" />
      </a>

      
      <a
        href="https://github.com/NandiniBasu05" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#15d1e9] transition-colors duration-300"
      >
        <FaGithub className="cursor-pointer" />
      </a>
    </div>
  );
};

export default ContactInfo;
