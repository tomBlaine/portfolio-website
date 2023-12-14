import Image from 'next/image'
import Head from 'next/head'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas Blaine | Software Engineer</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar/>
      <div className="container mt-24 mx-autox px-12 py-4">
          <HeroSection/>
          <AboutSection/>
          <ProjectSection/>
      </div>
      <Footer/>
    </main>
    </>
  )
}
