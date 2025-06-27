"use client"

import Navbar from "./components/navbar";
import Hero from "./components/heroSection"
import About from "./components/aboutSection"
import Skills from "./components/skillsSection"
import Project from "./components/projectSection"
import Hire from "./components/hireSection"
import Certificate from "./components/certificateSection"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Project />
      <Certificate />
      <Hire />
    </div>
  );
}
