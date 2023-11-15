import React from 'react'
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "AR Project",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["all", "web"],
    },
    {
        id: 2,
        title: "AR Project2",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["all", "web"],
    },
    {
        id: 3,
        title: "AR Project3",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["all", "web"],
    },
    {
        id: 4,
        title: "AR Project4",
        description: "jnfajknfd asjknfsjknafn jsknfkjsaf jfanskjfnsajk",
        image: "/images/about-image.png",
        tag: ["all", "web"],
    },
]

const ProjectSection = () => {
  return (
    <div>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
                <ProjectCard
                   key={project.id}
                   imgUrl={project.image}
                   title={project.title}
                   description={project.description} 
                 />
                 ))}
        </div>
    </div>
  )
}

export default ProjectSection