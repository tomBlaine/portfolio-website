import React, { useRef } from 'react'
import ImageSlider from './ImageSlider';
import { XMarkIcon } from '@heroicons/react/24/solid'; 
import { motion } from 'framer-motion';
import TechBox from './TechBox';
const ProjectOverlay = ({ project, onClose }) => {
    const contentRef = useRef(null);

    if (!project) return null;

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const handleBackgroundClick = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose();
        }
    };

    return (
        <div
        onClick={handleBackgroundClick}
        >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
                ref={contentRef}
                className="bg-[#181818] bg-opacity-95 p-4 mt-8 rounded-3xl w-5/6 h-5/6 relative flex flex-col overflow-hidden sm:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-full h-full sm:w-2/5 sm:h-full relative">
                    <ImageSlider images={project.images} alt={project.title}/>
                </div>
                <div className="w-full p-4 overflow-y-auto sm:w-1/2 2xl:my-auto 2xl:ml-10">
                    <h2 className="text-3xl text-white font-bold mb-4 2xl:text-5xl">{project.title}</h2>
                    <h2 className="text-xl text-[#c0cbd3] font-semibold mb-2 2xl:text-3xl">Project Overview</h2>
                    <p className="text-base text-[#c0cbd3] md:text-lg mb-4 2xl:text-2xl">{project.overview}</p>
                    <h2 className="text-xl text-[#c0cbd3] font-semibold mb-2 2xl:text-3xl">Technical Details</h2>
                    <div className="flex flex-wrap">
                        {project.tech.map((title) => (
                            <TechBox title={title} key={title} />
                        ))}
                    </div>
                    <p className="text-base text-[#c0cbd3] md:text-lg mb-4 2xl:text-2xl">{project.details}</p>
                    <h2 className="text-xl text-[#c0cbd3] font-semibold mb-2 2xl:text-3xl">Outcomes and Learning</h2>
                    <p className="text-base text-[#c0cbd3] md:text-lg mb-4 2xl:text-2xl">{project.outcomes}</p>
                    <button onClick={onClose} className="absolute top-2 right-2 text-black">
                        <XMarkIcon className="h-10 w-10 2xl:h-16 2xl:w-16 text-[#60666a]"></XMarkIcon>
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default ProjectOverlay