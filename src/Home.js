import React from "react";
import { Element } from "react-scroll";

import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <Element name="home">
      <div className="bg-blue-950 w-full h-full overflow-hidden scrollbar-hide">
        <div className="flex ">
          <div className=" left md:py-10 sm:pr-20 w-1/2 mt-24 fixed top-7 ">
            <div className=" max-h-96 ml-9 items-center">
              <p className="text-4xl font-semibold text-blue-200 ">Hi there!</p>
              <p className="text-6xl font-semibold text-blue-400">
                I'm Tanmayii.
              </p>
              <p className="text-sky-200 py-3 pr-3">
                I design user-friendly websites and applications using HTML,
                Tailwind CSS JavaScript & React. working closely with back end
                developers, I transform designs into functional digital
                solutions for great user experiences.
              </p>
              <button
                href="/"
                className="rounded-md py-2 px-7 mt-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500  "
              >
                <a
                  href="/Tanmayii_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  View Resume
                </a>
              </button>
              <div className="flex">
                <a
                  href="https://www.linkedin.com/in/tanmayii-basutkar-87ba2b251"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src="/link-removebg-preview.png"
                    alt="..."
                    className="w-10 pt-3"
                  />
                </a>
                <a
                  href="https://twitter.com/Tanmayii1"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img src="/twitter.png" alt="..." className="w-6 mt-5 mx-3" />
                </a>
                <a
                  href="https://github.com/tanmayii"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src="/github-removebg-preview.png"
                    alt="..."
                    className="w-10 mt-5"
                  />
                </a>
                <a
                  href="https://www.instagram.com/tanhie._/?next=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className=""
                >
                  <img
                    src="/instagram-removebg-preview.png"
                    alt="..."
                    className="w-6 mx-3 mt-5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center mt-24 ml-auto h-full ">
            <div className="ml-24 mt-3">
              <img
                src="/p2-removebg-preview.png"
                alt="..."
                className="w-72 h-72"
              />
            </div>
            <Projects />
            <Skills />
            <Contact />
          </div>
        </div>
      </div>
    </Element>
  );
}
