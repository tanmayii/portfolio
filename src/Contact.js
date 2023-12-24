import React from "react";
import emailjs from "emailjs-com";
import { Link } from "react-scroll";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r715u9j",
        "template_c9fu9om",
        e.target,
        "FsT-XJIW4AS4RLKRf"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="contact" className="mt-10 mb-20">
      <p className="text-4xl font-semibold text-blue-200">Contact Me:</p>
      <form className="mt-6" onSubmit={sendEmail}>
        <div className="mb-4">
          <label htmlFor="name" className="text-blue-300 block mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-11/12 p-2 bg-blue-300 outline-none text-blue-900 rounded-md"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-blue-300 block mb-2">
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-11/12 p-2 bg-blue-300 outline-none text-blue-900 rounded-md"
            placeholder="john@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-blue-300 block mb-2">
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-11/12 p-2 bg-blue-300 outline-none text-blue-900 rounded-md"
            placeholder="Type your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
      <Link to="contact" smooth={true} duration={500} className="hidden"></Link>
    </div>
  );
}
