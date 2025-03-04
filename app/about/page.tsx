"use client";
import Hero from "../_components/Hero";
import Experience from "../_components/Experience";
import Projects from "../_components/Projects";
import Other from "../_components/Other";
import Education from "../_components/Education";
import AboutSection from "../_components/About";
import Contacts from "../_components/Contacts";

export default function About() {
  return (
    <main className="h-fit relative">
      <Hero />
      <AboutSection />
      <Experience />
      <Projects />
      <Education />
      <Other />
      <Contacts />
    </main>
  );
}
