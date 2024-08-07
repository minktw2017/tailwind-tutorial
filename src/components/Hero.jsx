import React from "react";
import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 bg-slate-800 py-8 sm:grid-cols-3 md:h-[70vh]">
      <div className="col-span-1 mx-auto my-auto h-auto w-[300px] lg:w-[350px]">
        <img src={heroimage} alt="hero image" />
      </div>
      <div className="col-span-2 my-auto px-5">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
              "Consultant",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>

        <p className="my-6 text-white sm:text-lg lg:text-xl">
          My name is Mink Wu and I have 5+ years experience in web developments.
        </p>
        <div className="my-8">
          <a
            href="/"
            className="mr-4 w-full rounded-xl bg-gradient-to-br from-orange-500
            to-pink-500 px-6 py-3 text-white"
          >
            Download CV
          </a>
          <a
            href="/"
            className="mr-4 w-full rounded-xl border border-gray-400
            from-orange-500 to-pink-500 px-6 py-3 text-white 
            hover:border-none hover:bg-gradient-to-br"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
