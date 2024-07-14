"use client"
import Image from "next/image"
import Shape from "../_assets/ellipse.png"
import { useEffect, useRef } from "react"

export default function About() {
  const contentsRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const contents = contentsRef.current?.querySelectorAll("span")

    if (contents) {
      gsap.fromTo(
        contents,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          stagger: 0.3,
        },
      )
    }
  }, [])

  const stacks = [
    "React",
    "TypeScript",
    "Next.js",
    "Recoil",
    "React Query",
    "Tailwind",
    "Styled-Component",
    "Emotion.js",
    "RTK",
    "Java",
    "Spring Boot",
    "SQL",
  ]

  return (
    <section className="mb-16 lg:max-w-5xl lg:mx-auto lg:mb-[110px]">
      <div className="flex items-center p-24px">
        <Image
          src={Shape}
          style={{
            width: "calc(40px + (110 - 40) * (100vw - 400px) / (1600 - 400))",
          }}
          alt="Ellipse"
        />
        <h3 className="ml-2.5 font-eiko text-section font-medium leading-none tracking-[-0.03em]">
          About
        </h3>
      </div>
      <div className="overflow-hidden overflow-unset-lg">
        <ul className="flex gap-1 whitespace-nowrap animate-marquee mb-2">
          {stacks.map((s) => {
            return (
              <li
                key={s}
                className="inline-block text-lg font-bold px-5 w-fit bg-white text-black rounded-full"
              >
                {s}
              </li>
            )
          })}
        </ul>
        <ul className="flex gap-1 whitespace-nowrap animate-marqueeR">
          {stacks.reverse().map((s) => {
            return (
              <li
                key={s}
                className="inline-block text-lg font-bold px-5 w-fit bg-white text-black rounded-full"
              >
                {s}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="py-24px text-content leading-normal mb-7 w-3/4 mx-auto">
        {/* <span>
          With over three years of hands-on experience in web application
          development, I'm a seasoned frontend developer adept at crafting
          dynamic and user-friendly interfaces. Having navigated both frontend
          and backend realms, I possesses a comprehensive understanding of the
          web development lifecycle.
        </span>
        <div className="h-7" />
        <span>
          Specializing in frontend technologies, I am proficient in utilizing
          React.js to create robust and scalable applications for production
          environments. I am passionate about translating design concepts into
          intuitive user interfaces that enhance user experience and engagement.
        </span> */}
        <span>
          I am an experienced frontend developer with over three years of
          professional experience in designing and developing dynamic,
          user-friendly web applications. My expertise lies in creating
          intuitive interfaces and enhancing user experiences, backed by a
          strong foundation in both frontend and backend technologies.
        </span>
        <div className="h-7" />
        <span>
          My technical skills include JavaScript, React, Redux, React Query,
          Java, Spring Boot, AWS, and SEO optimization, among others. I am
          passionate about staying at the forefront of technology and
          continually improving my skills to deliver top-notch web applications.
        </span>
        <div className="h-7" />
        <span>
          Beyond coding, I enjoy collaborating with cross-functional teams,
          conducting code reviews, and fostering a culture of best practices and
          continuous improvement. My goal is to create impactful digital
          experiences that not only meet but exceed user expectations.
        </span>
        <div className="h-7" />
        <span>
          Feel free to explore my portfolio to see the projects I've worked on
          and the solutions I've crafted. Let's connect and see how we can
          create something amazing together! 💫💫
        </span>
      </div>
      <div className="w-fit text-title py-2 px-10 leading-normal mx-auto border border-white rounded-[50px] flex items-center justify-center">
        Check CV
      </div>
    </section>
  )
}
