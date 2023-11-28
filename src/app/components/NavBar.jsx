"use client";
import Link from 'next/link'
import Image from 'next/image';
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
]

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
        <div className="flex container lg:py-4  flex-wrap items-center justify-between mx-auto px-4 py-2">
            <a href="#hero"><Image src="/images/logo.png" width={50} height={50}></Image></a>
            <div className="mobile-menu block md:hidden">
                {
                    !navbarOpen ? (
                        <button onClick={ () => setNavbarOpen(true) } className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white">
                            <Bars3Icon className="h-5 w-5"></Bars3Icon>
                        </button>
                    ) : (
                        <button onClick={ () => setNavbarOpen(false) } className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white">
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )
                }
            </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        )
                        )
                    }
                    <li><a href="https://github.com/tomBlaine"><FaGithub className="h-8 w-8 text-[#ADB7BE] hover:text-white cursor-pointer"></FaGithub></a></li>
                    <li><a href="https://github.com/tomBlaine"><FaLinkedin className="h-8 w-8 text-[#ADB7BE] hover:text-white cursor-pointer"></FaLinkedin></a></li>
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar

