import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { Element } from "react-scroll";

export default function Skills() {
  return (
    <Element name="skills">
      <div>
        <div className="mt-14">
          <p className="text-4xl font-semibold text-blue-200 ">
            Technologies I'm working with :
          </p>
          <div className="grid grid-cols-4 gap-x-0 gap-y-6 justify-center mt-10 mx-8">
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaReact size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">ReactJS</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <SiTailwindcss size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">Tailwind CSS</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaHtml5 size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">HTML5</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaCss3 size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">CSS3</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <IoLogoJavascript size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">JavaScript</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaJava size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">Java</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaPython size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">Python</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <IoLogoFigma size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">Figma</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <FaNodeJs size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">NodeJS</h1>
            </div>
            <div className="h-28 w-28 bg-blue-900 rounded-md text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 flex flex-col">
              <SiMongodb size={50} className="mx-auto my-auto h-full" />
              <h1 className="mx-auto mb-2 font-bold">MongoDB</h1>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
