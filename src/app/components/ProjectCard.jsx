import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';
const ProjectCard = ({ project, onLearnMore }) => {
  return (
    <div>

      
        <div 
          className="h-52 md:h-72 rounded-t-xl relative group" 
          style={{ background: `url(${project.images[0]})`, backgroundSize: "cover"}}>

            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group group-hover:flex group-hover:bg-opacity-80 transistion-all duration-500">
              <Link href={project.gitUrl} className="mr-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <FaGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"></FaGithub>
              </Link>
              <button onClick={() => onLearnMore(project)} className="h-14 w-32 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                <p className="h-10 w-full text-center mt-1.5 text-[#ADB7BE] text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white">Learn More</p>
              </button>
            </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
            <p className="text-[#ADB7BE]">{project.description}</p>
        </div>
    </div>
  )
}

export default ProjectCard