"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

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

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );
  return (
    <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
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
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filterProjects.map((project) => (
                <ProjectCard
                   key={project.id}
                   imgUrl={project.image}
                   title={project.title}
                   description={project.description} 
                   gitUrl={project.gitUrl}
                   previewUrl={project.previewUrl}
                 />
                 ))}
        </div>
    </div>
  )
}

export default ProjectSection