import React from "react";
import { Element } from "react-scroll";

export default function Projects() {
  return (
    <Element name="projects">
      <div className="bg-blue-950 h-full overflow-hidden scroll mt-14">
        <h1 className="text-4xl font-semibold text-blue-200">Projects</h1>
        <div className="mt-5 ml-2 ">
          <div className="h-36 w-11/12 mt-3 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300 ">
            <p className="pt-2 pl-3 font-bold ">WEATHER APP</p>
            <p className="pt-2 pl-3">
              WeatherApp is a user-friendly and reliable weather application
              that provides real-time updates, forecasts, and personalized
              weather information for locations worldwide.
            </p>
          </div>
          <div className="h-28 w-11/12 mt-3 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300">
            <p className="pt-2 pl-3 font-bold ">FACE MOUSE</p>
            <p className="pt-2 pl-3">
              Face-Controlled Mouse, an innovative and hands-free solution to
              interact with your computer using facial expressions and gestures.
            </p>
          </div>
          <div className="h-40 w-11/12 mt-3 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300">
            <p className="pt-2 pl-3 font-bold ">
              AGGREGATOR WEBSITE FOR CAREER DEVELOPMENT
            </p>
            <p className="pt-2 pl-3">
              The student-focused app offers access to test patterns from
              various companies, enabling users to study relevant material in
              the Practice section and take mock tests with reports in the Test
              section based on their chosen field.
            </p>
          </div>
          <div className="h-48 w-11/12 mt-3 rounded-md bg-blue-900 text-blue-300 hover:bg-blue-300 hover:text-blue-900 transition-colors duration-300">
            <p className="pt-2 pl-3 font-bold ">FITNESS EXERCISE APP</p>
            <p className="pt-2 pl-3">
              The Fitness Exercise App is a cutting-edge application designed to
              revolutionize your fitness routine. Built with React.js and styled
              with Tailwind CSS, the app delivers a seamless and visually
              appealing experience. Users can access a diverse range of
              exercises, each accompanied by clear instructions and visual
              demonstrations.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
}
