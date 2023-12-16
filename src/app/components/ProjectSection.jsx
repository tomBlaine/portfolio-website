"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView} from "framer-motion";
import ProjectOverlay from './ProjectOverlay';

const projectsData = [
    {
        id: 1,
        title: "AR for Education",
        description: "Developed an AR iOS app with Unity, integrating a Laravel API, enabling teachers to create and deploy interactive AR presentations to student devices.",
        overview:"Developed a dual-component AR system for secondary education comprising a Laravel web application and an iOS app, enabling teachers to create and deploy 3D presentations in an AR setting",
        details:"The IOS app used Unity for AR functionality with Sketchfab API intergrated for import of 3D models. The web app integrated CKEditor for rich text and was deployed to digital ocean app platform for testing.",
        tech: ["Unity", "Laravel", "C#", "PHP", "HTML", "CSS"],
        outcomes:"A functional application was developed but key learnings included the importance of user feedback in shaping educational technology, usability studies revealed the system's potential and areas for improvement. Future work includes integrating ChatGPT API to improve usability when building presentations.",
        coverImg: "/images/1.png",
        images: [
            "/images/1/1.png",
            "/images/1/2.png",
            "/images/1/3.png",
            "/images/1/4.png",
            "/images/1/5.png",
        ],
        tag: ["Mobile", "Web", "All"],
        gitUrl: "https://github.com/tomBlaine/AR-Web-Application-and-API",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Android Museum App",
        description: "An Android app to display the university's computer science history artifacts, featuring curator management and user interaction with comments.",
        overview:"This Android Studio app showcases the university's Computer Science history collection, enabling users to explore artefacts. It features a multi-tier user system: guests, logged-in users, and curators, enhancing interaction with artefact images, descriptions, and community comments.",
        details:"Built using Android Studio, Kotlin, and XML, this app adheres to Google's Material Design and accessibility guidelines. It leverages Firebase for data storage, image retrieval, and user authentication, offering a seamless, interactive experience.",
        tech: ["Android Studio", "Firebase", "Kotlin", "XML"],
        outcomes:"The project honed skills in Android development and Firebase integration. It demonstrated the value of user-centric design and efficient data management, while fostering an understanding of diverse user roles in app functionality.",
        coverImg: "/images/2.png",
        images: [
            "/images/2/1.png",
            "/images/2/2.png",
            "/images/2/3.png",
            "/images/2/4.png",
            "/images/2/5.png",
            "/images/2/6.png",
        ],
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/tomBlaine/Museum-Application-Android",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Laravel Blog App",
        description: "Developed a Laravel-based blog web app with custom back-end, featuring robust authentication, and integrated database seeding, factories, models, and migrations.",
        overview:"Developed a blog application enabling user registration, blogging, and commenting. Features include image-enabled posts, multi-level user privileges, and post-tagging. Enhanced user engagement through email notifications for post interactions.",
        details:"Built on Laravel with a custom PHP backend. Incorporated one-to-one, one-to-many, and many-to-many database relationships. Authentication managed through Laravel Breeze. Leveraged Laravel Livewire for dynamic search functionality and a custom service container to fetch data from an external API.",
        tech: ["Laravel", "PHP", "HTML", "CSS", "JavaScript"],
        outcomes:"Successfully implemented a multi-faceted blog app, honing skills in Laravel, PHP, HTML, CSS. Gained expertise in implementing user authentication, complex database relationships and API integration.",
        coverImg: "/images/3.png",
        images: [
            "/images/3/1.png",
            "/images/3/2.png",
            "/images/3/3.png",
            "/images/3/4.png",
            "/images/3/5.png",
            "/images/3/6.png",
        ],
        tag: ["All", "Web"],
        gitUrl: "https://github.com/tomBlaine/Blog-Web-App",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "React Personal Portfolio",
        description: "An interactive Next.js and React portfolio, enriched with TailwindCSS for a sleek design and dynamic animations.",
        overview:"A dynamic single-page application showcasing my software portfolio. It presents a modern, sleek design powered by Tailwind CSS. The site features custom animations, emphasizing interactive user experience and responsive web design.",
        details:"The portfolio leverages Next.js and React. Tailwind CSS is utilized and Framer Motion adds fluid animations. The responsive layout ensures optimal viewing across devices. Deployment is achieved through Vercel platform.",
        tech: ["Next.js", "React", "JavaScript", "Vercel"],
        outcomes:"Developing this portfolio enhanced skills in React and Next.js, deepening understanding of modern web development practices. Experience in responsive design and animation was gained through Tailwind and Framer Motion. Deployment experience was acquired via Vercel. Future work includes continually improving app responsiveness",
        coverImg: "/images/4.png",
        images: [
            "/images/about-image.png",
            "/images/hero-image1.png",
        ],
        tag: ["All", "Web"],
        gitUrl: "https://github.com/tomBlaine/portfolio-website",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Big Data and Machine Learning",
        description: "A comprehensive big data project employing various ML techniques, culminating in a neural network for accurate digit recognition.",
        overview:"Developed a multi-faceted Big Data and Machine Learning project, focusing on species prediction and image classification. Utilized advanced methods to analyze Iris flowers and wines, along with CIFAR10 image dataset classification.",
        details:"Implemented a suite of techniques including K-Means clustering, Gaussian Mixture Modeling, linear regression, PCA, LDA, Support Vector Machines, and Neural Networks. Emphasis on CNNs and SVC for image classification with a notable accuracy achievement.",
        tech: ["Python", "NumPy", "TensorFlow" , "Matplotlib"],
        outcomes:"Achieved 76.3% accuracy in CIFAR10 dataset image classification, highlighting potential for hyperparameter tuning improvements. Gained proficiency in diverse ML techniques and libraries, enhancing understanding of data analysis, predictive modeling, and algorithm optimization in complex datasets.",
        coverImg: "/images/5.png",
        images: [
            "/images/5/1.png",
            "/images/5/2.png",
            "/images/5/3.png",
            "/images/5/4.png",
        ],
        tag: ["All", "Other"],
        gitUrl: "https://github.com/tomBlaine/Big-Data-and-Machine-Learning",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "UX design for Collaborative Consumer Interface",
        description: "Designed an AI collaboration tool focusing on consumer needs using UX methods, enhancing organizational efficiency and user experience.",
        overview:"As part of a four-designer team, we designed a collaborative tool integrating AI to enhance productivity in group settings. Our project focused on designing an intuitive system for university and business collaborations, culminating in the creation of an advertisement and a demonstration website.",
        details:"Our UX process was comprehensive, involving user research, persona creation, and journey mapping. We employed iterative design with continuous user feedback, focusing on usability testing and prototyping.",
        tech: [],
        outcomes:"The project's success was marked by positive feedback, highlighting our effective use of AI to reduce user anxiety and enhance collaboration efficiency. This experience taught us lessons in user-centric design, team collaboration, and the application of AI in improving user experience in group projects.",
        coverImg: "/images/6.png",
        images: [
            "/images/6/1.png",
            "/images/6/2.png",
            "/images/6/3.png",
            "/images/6/4.png",
            "/images/6/5.png",
            "/images/6/6.png",
        ],
        tag: ["All", "Other"],
        gitUrl: "https://drive.google.com/drive/folders/1wyR-nELYBh_jfmZQq1BXGbhZixqeMvlZ?usp=drive_link",
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
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-2">
            My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-2">
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
            <ProjectTag 
                onClick={handleTagChange} 
                name="Other" 
                isSelected={tag === "Other"} 
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