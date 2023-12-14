import React from 'react'
import Image from 'next/image';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between items-center p-4 border-t-[#33353F] border-l-transparent border-r-transparent">
      <img 
        src="/images/logo.png" 
        alt="Footer Image" 
        className="w-10 h-8 md:w-12 md:h-10" 
      />
      <div className="flex items-center">
          <a href="https://github.com/tomBlaine" className="mr-4" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-6 w-6 md:h-8 md:w-8 text-[#ADB7BE] hover:text-white cursor-pointer"/>            
          </a>
          <a href="https://www.linkedin.com/in/thomas-blaine1" className="mr-4" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6 w-6 md:h-8 md:w-8 text-[#ADB7BE] hover:text-white cursor-pointer" />
          </a>
          <p className="text-sm md:text-base text-slate-600">Created by Thomas Blaine 2023</p>
      </div>
    </footer>
  )
}

export default Footer