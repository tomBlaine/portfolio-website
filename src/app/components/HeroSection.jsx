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
    <section id="hero" className="lg:py-10 scroll-mt-24 lg:ml-20 2xl:ml-96 md:mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-12">

            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-8 place-self-center text-centre sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl lg:text-7xl lg:leading-normal 2xl:text-8xl sm:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-400">Hi, I&apos;m {" "}</span>
                    
                    Tom
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl 2xl:text-2xl md:pr-20 2xl:pr-32">
                    I&apos;m a graduate computer scientist who loves learning and thrives in dynamic environments 🚀.
                </p>
                <div className="flex flex-row ml-6 md:ml-0">
                    <a href="/Thomas Blaine CV 2023.pdf" download>
                      <button className="px-1 py-1 2xl:mt-4 rounded-full w-full sm:w-fit bg-gradient-to-r from-primary-500 to-secondary-300  hover:bg-slate-800 text-white mt-3 2xl:text-xl">
                          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                      </button>
                    </a>
                    <a href="https://github.com/tomBlaine" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-12 w-12 2xl:h-14 2xl:w-14 text-primary-400 hover:text-white cursor-pointer px-1 py-1 2xl:py-0 ml-4 mt-3 2xl:ml-8"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thomas-blaine1" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="h-12 w-12 2xl:h-14 2xl:w-14 text-primary-400 hover:text-white cursor-pointer px-1 py-1 ml-4 mt-3 2xl:py-0 2xl:ml-8"/>
                    </a>
                </div>
            </motion.div>
            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0 hidden md:block"
            >
                <div className="relative">
                <motion.div
                    className="bg-[url('/images/profile.PNG')] w-[15rem] h-[15rem] ml-10 lg:w-[22rem] lg:h-[22rem] 2xl:w-[28rem] 2xl:h-[28rem] lg:ml-10 2xl:ml-96 bg-cover bg-cente border-primary-500 border-4 shadow-md absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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