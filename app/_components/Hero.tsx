"use client"
import Image from "next/image"
import Arrow from "../_assets/arrow.png"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const linesRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const lines = linesRef.current?.querySelectorAll("div")

    if (lines) {
      gsap.fromTo(
        lines,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 5,
          ease: "power4.out",
          stagger: 0.3,
        },
      )
    }

    const spans = linesRef.current?.querySelectorAll("span")

    if (spans) {
      const gradients = [
        "linear-gradient(90deg, #C6EA8D, #FE90AF)", // Gradient for the first span
        "linear-gradient(180deg, #D8B5FF, #1EAE98)", // Gradient for the second span
        "linear-gradient(180deg, #FCA5F1, #B5FFFF)", // Gradient for the third span
      ]

      spans.forEach((span, index) => {
        const steps = [3, 2, 1]
        gsap.to(span, {
          scrollTrigger: {
            trigger: linesRef.current,
            start: `top ${steps[index] * 5}%`,
            toggleActions: "play none none reverse",
          },
          backgroundImage: gradients[index % gradients.length],
          backgroundClip: "text",
          webkitBackgroundClip: "text", // For Safari support
          color: "transparent",
          duration: 1,
          ease: "power2.inOut",
          onStart: () => {
            span.style.backgroundClip = "text"
            span.style.webkitBackgroundClip = "text" // For Safari support
            span.style.color = "transparent"
          },
        })
      })
    }
  }, [])

  return (
    <section className="px-24px max-h-screen flex flex-col justify-center lg:max-w-5xl lg:mx-auto">
      <h1 ref={linesRef} className="text-hero font-medium leading-none">
        <div>Hi,</div>
        <div>
          I&#39;m <span className="font-eiko">Minsun</span>.
        </div>
        <div className="font-eiko">
          <span>Software</span>
        </div>
        <div>Engineer</div>
        <div>
          Based in <span className="font-eiko">Seoul</span>.
        </div>
      </h1>
      <Image
        src={Arrow}
        width={80}
        height={80}
        className="mt-10 animate-bounce"
        alt="Arrow"
      />
    </section>
  )
}
