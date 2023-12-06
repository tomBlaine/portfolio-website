"use client"
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import TechBox from './TechBox';

const Tech_Data = [
    "Java",
    "Java-Script",
    "Python",
    "Kotlin",
    "C#",
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
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                </ul>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2 ml-3">
                <li>Swansea University</li>
                <li>B</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2 ml-3">
                <li>A</li>
                <li>B</li>
                <li>C</li>
            </ul>
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
    <section id="about" className="text-white scroll-mt-24 lg:ml-4">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" alt="hero image" width={500} height={500}></Image>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                <p className="text-base md:text-lg ">
                    jndjndja sjfjadfnsajkf sajnfjsafn jnfajnfjsa jsanfjnsaf jsnfajfn jnsfajnfja jnsfjnfanj
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