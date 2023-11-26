"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from "framer-motion";
import ProjectOverlay from './ProjectOverlay';

const projectsData = [
    {
        id: 1,
        title: "AR Project",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["Mobile", "All"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "AR Project2",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "AR Project3",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "AR Project4",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["All"],
        gitUrl: "/",
        previewUrl: "/",
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const [selectedProject, setSelectedProject] = useState(null);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  
    const handleLearnMore = (project) => {
      setSelectedProject(project);
      setIsOverlayVisible(true);
    };
  
    const handleCloseOverlay = () => {
      setIsOverlayVisible(false);
      setSelectedProject(null);
    };

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity: 1},
    }
  return (
    <section id="projects" className="scroll-mt-24 lg:ml-20">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-3 md:mb-6">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag === "All"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag === "Web"} 
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Mobile" 
                isSelected={tag === "Mobile"} 
            />
        </div>
        <ul  ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProjects.map((project, index) => (
                <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index*0.4 }}
                >
                <ProjectCard
                   project={project}
                   onLearnMore={handleLearnMore}
                 />
                </motion.li>
                 ))}

        </ul>

        {isOverlayVisible && 
            <ProjectOverlay project={selectedProject} onClose={handleCloseOverlay} />
        }
    </section>
  )
}

export default ProjectSection