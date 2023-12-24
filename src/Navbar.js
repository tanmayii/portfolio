import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-blur-md p-3 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold ml-6 text-xl">portfolio</div>
        <div className="flex space-x-10 mr-10">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-bold"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-bold"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-white hover:text-gray-300 font-bold"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="rounded-md py-1 px-3  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-sky-500 shadow-md"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
