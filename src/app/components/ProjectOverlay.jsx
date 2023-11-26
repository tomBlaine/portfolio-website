import React, { useRef } from 'react'
import Image from 'next/image';
import ImageSlider from './ImageSlider';
import { XMarkIcon } from '@heroicons/react/24/solid'; 
import { motion } from 'framer-motion';
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
        <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={fadeIn}
        transition={{ duration: 0.5 }} 
        onClick={handleBackgroundClick}
        >
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
                ref={contentRef}
                className="bg-white p-4 rounded-3xl w-5/6 h-5/6 relative flex overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="w-2/5 h-full relative">
                    <ImageSlider images={project.images} alt={project.title}/>
                </div>
                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                    <p className="text-base md:text-lg">{project.description}</p>
                        <button onClick={onClose} className="absolute top-2 right-2 text-black">
                            <XMarkIcon className="h-10 w-10 text-[#60666a]"></XMarkIcon>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectOverlay