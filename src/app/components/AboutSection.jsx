"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import TechBox from './TechBox';
import { motion } from "framer-motion";

const variants = {
    animate: {
      borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

const Tech_Data = [
    "Java-Script",
    "Python",
    "Java",
    "Kotlin",
    "C#",
    "PHP",
    "Unity",
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind",
    "MySQL",
    "FireBase"
]

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div>
                <div className="flex flex-wrap">
                    {Tech_Data.map((title) => (
                        <TechBox title={title} key={title} />
                    ))}
                </div>
                <ul className="mt-5 ml-4 list-disc">
                    <li>Web and Mobile Development</li>
                    <li>Cryptography and IT Security</li>
                    <li>Database Management</li>
                    <li>Big Data and Machine Learning</li>
                </ul>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <div>
                <p className="font-bold">First Class Honours degree in Computer Science from Swansea University.</p>
                <p className="mt-2">Key modules include:</p>
                <ul className="list-disc pl-2 ml-3 mt-2">
                    <li>Web Development</li>
                    <li>Mobile Development</li>
                    <li>User Experience</li>
                    <li>Cryptography and IT Security</li>
                    <li>Big Data and Machine Learning</li>
                    <li>Computer Graphics</li>
                    <li>Database Systems</li>
                    <li>Embedded System Design</li>

                </ul>
            </div>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (

            <div>
                <p><b>IBM IX</b>, Work Experience</p>
                <ul className="list-disc pl-2 ml-3">
                    <li>Gained experience of operational areas such as software development, UI/UX design and administration.</li>
                    <li>Gained insight into client-centric service by helping to prepare and distribute client newsletters.</li>
                </ul>

                <p className="mt-3"><b>Sigma Asset Management</b>, Work Experience</p>
                <ul className="list-disc pl-2 ml-3">
                    <li>Handled client communications successfully, ensuring that all client letters were dispatched ahead of schedule.</li>
                </ul>
            </div>
        )
    }
]

function AboutSection() {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        });
    }

    return (
    <section id="about" className="text-white scroll-mt-24 lg:ml-4 mt-5">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image1.png" alt="hero image" width={420} height={420} className="rounded-2xl hidden md:block"></Image>
            
            <motion.div
                    className="bg-[url('/images/profile.PNG')] w-[20rem] h-[20rem] bg-cover bg-cente border-primary-500 border-4 shadow-md absolute left-1/2 transform -translate-x-1/2 md:hidden"
                    variants={variants}
                    animate="animate"
            />
            
            <div className="mt-[370px] md:mt-4 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg ">
                    I have a strong interest in web and mobile development, cybersecurity, and the immersive worlds of VR/AR. I recently graduated from Swansea University with a first-class bachelor&apos;s degree in Computer Science.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("experience")} active={tab==="experience"}>Experience</TabButton>
                </div>
                <div className="mt-5">{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection