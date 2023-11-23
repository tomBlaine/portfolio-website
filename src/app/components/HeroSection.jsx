"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-10 scroll-mt-24 lg:ml-20">
        <div className="grid grid-cols-1 sm:grid-cols-12">

            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-8 place-self-center text-centre sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl lg:text-7xl lg:leading-normal sm:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">Hello, Im{" "}</span>
                    <br/>
                    <TypeAnimation
      sequence={[
        'Tom',
        1000,
        'Mobile Developer',
        1000,
        'Web Developer',
        1000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    sjdjadkljs sjnadjnsan sjandjsnajd jksandjksa jksndjdnsakj
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire me</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white  mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1 }}
              transition= {{ duration: 0.6 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                      src="/images/hero-image1.png"
                      alt="hero image"
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                      width={300}
                      height={300}
                    />
                </div>
            </motion.div>

        </div>
    </section>
  )
}

export default HeroSection