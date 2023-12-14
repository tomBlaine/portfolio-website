"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const variants = {
  animate: {
    borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
};

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-10 scroll-mt-24 lg:ml-20 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-12">

            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-8 place-self-center text-centre sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl lg:text-7xl lg:leading-normal sm:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hi, I'm {" "}</span>
                    
                    Tom
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I'm a graduate computer scientist who loves learning and thrives <br/> in dynamic environments 🚀.
                </p>
                <div className="flex flex-row">
                    <a href="/cv.pdf" download>
                      <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white  mt-3">
                          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                      </button>
                    </a>
                    <a href="https://github.com/tomBlaine" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-12 w-12 text-primary-500 hover:text-white cursor-pointer px-1 py-1 ml-4 mt-3"/>
                    </a>
                    <a href="https://github.com/tomBlaine" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-12 w-12 text-primary-500 hover:text-white cursor-pointer px-1 py-1 ml-4 mt-3"/>
                    </a>
                </div>
            </motion.div>
            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="relative">
                <motion.div
                    className="bg-[url('/images/mac.jpeg')] w-[25rem] h-[25rem] bg-cover bg-cente border-primary-500 border-4 shadow-md absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    variants={variants}
                    animate="animate"
                />
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default HeroSection