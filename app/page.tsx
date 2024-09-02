"use client"
import { useEffect, useRef, useState } from "react"
import About from "./_components/About"
import Experience from "./_components/Experience"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import Hero from "./_components/Hero"
import Education from "./_components/Education"
import Projects from "./_components/Projects"
import useMousePosition from "./utils/useMousePosition"
import gsap from "gsap"
import Other from "./_components/Other"

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const maskRef = useRef(null);

  useEffect(() => {
    const size = isHovered ? 120 : 40;

    if (maskRef.current) {
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      gsap.to(maskRef.current, {
        WebkitMaskPosition: `${x + scrollX - (size / 2)}px ${y + scrollY - (size / 2)}px`,
        WebkitMaskSize: `${size}px`,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    }
  }, [x, y, isHovered]);

  return (
      <main className="h-fit relative">
      <div ref={maskRef} className="mask"></div>
        <Header />
        <Hero />
        <About setIsHovered={setIsHovered} />
        <Experience />
        <Projects setIsHovered={setIsHovered} />
        <Education />
        <Other />
        <Footer />
      </main>
  )
}
