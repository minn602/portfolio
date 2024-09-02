"use client"
import Image from "next/image"
import Star from "../_assets/star.png"
import { Dispatch, SetStateAction, useState } from "react"

export default function Projects({setIsHovered}: {setIsHovered: Dispatch<SetStateAction<boolean>>}) {
  const [selected, setSelected] = useState("pebblecity")

  const projects = [
    {
      id: "pebblecity",
      title: (
        <div>
          <a
            // href="https://www.pebblecity.io/"
            target="_blank"
            className="underline"
          >
            {/* Game Name */}
          </a>{" "}
          WEB3 Social Casino Game Administration Website
        </div>
      ),
      desc: `I developed both the frontend and backend
      of an administration website for a web3 social casino game targeting the United States market.  This platform provides comprehensive management functionalities crucial for overseeing game operations and enhancing player engagement.`,
      stacks: [
        "React",
        "TypeScript",
        "React-Query",
        "RTK",
        "Java",
        "Spring Boot",
        "Scss",
      ],
      features: [
        <>
          <div>Frontend Development</div>Led the entire frontend development
          process, from initial setup to deployment. Designed and implemented
          responsive UI/UX features to create dynamic dashboards and intuitive
          management modules for efficient data handling.
        </>,
        <>
          <div>Backend Development</div>Developed RESTful APIs using Java and
          the Spring Boot framework within a Microservices Architecture for user
          and content management systems.
        </>,
        <>
          <div>Performance Optimization</div>Enhanced simulator algorithm logic
          resulting in a 10% performance improvement through optimization
          techniques. Migrated data synchronization from Redux to React Query,
          enabling real-time updates and improved performance.
        </>,
        <>
          <div>Quality Assurance</div>Wrote comprehensive unit tests using the
          JUnit library, demonstrating a strong understanding of test flow and
          ensuring robust code quality.
        </>,
        <>
          <div>Collaboration and Code Review</div>Collaborated with team members
          in conducting code reviews to enhance code quality, promote best
          practices, and ensure maintainable and scalable solutions.
        </>,
      ],
    },
    {
      id: "wooparoo",
      title: (
        <div>
          <a
             href="https://wooparoo.hangame.com/"
            target="_blank"
            className="underline"
          >
            Wooparoo Odyssey
          </a>{" "}
          Official Website
        </div>
      ),
      desc: `I led the development of the official website for “Wooparoo Odyssey”, a popular social network game. The website serve as a comprehensive platform featuring game introduction, pre-registration and pre-sale events, and NFT(Non-Fungible Token) item market.`,
      stacks: ["React", "TypeScript", "React-Query", "Recoil", "Emotion.js"],
      features: [
        <>
          <div>Frontend Development</div> Developed and maintained an official
          website targeting a global user base, ensuring continuous
          functionality and user engagement.
        </>,
        <>
          <div>Payment Integration</div> Implemented a streamlined payment
          process using &#39;Xsolla&#39;, a leading global payments solution, to enhance
          user convenience and secure transactions.
        </>,
        <>
          <div>Social Integration</div> Integrated social login and sharing
          functionalities to optimize user accessibility and promote user
          engagement across social platforms.
        </>,
        <>
          <div>Performance Optimization</div> Optimized website performance
          using the Lighthouse tool, achieving a 10% increase in overall
          performance score. Reduced First Contentful Paint time from 8.4s to
          1.5s and decreased Largest Contentful Paint time by over 50%,
          resulting in improved user experience and site responsiveness.
        </>,
        <>
          <div>Geo-Targeting</div> Improved user accessibility by implementing
          geoLite database and Nginx configuration to redirect specific IP
          users.
        </>,
        <>
          <div>Architectural Design</div> Designed and implemented a robust MVC
          (Model-View-Controller) architecture pattern to enhance developer
          efficiency and maintainability of the website&#39;s codebase.
        </>,
      ],
    },
    {
      id: "baconbox",
      title: (
        <div>
          <a
            href="https://www.baconbox.co/"
            target="_blank"
            className="underline"
          >
            BaconBox
          </a>{" "}
          Commerce Website
        </div>
      ),
      desc: "I led the development of the website for Baconbox, a monthly subscription service providing dog products, services, and experiences, serving over 10,000 users. This project focused on enhancing user experience and optimizing marketing content.",
      stacks: ["React", "TypeScript", "Scss", "Mobx"],
      features: [
        <>
          <div>Technology Transition</div> Transitioned the platform from
          WordPress to React, resulting in a 20% increase in customer engagement
          through an optimized checkout process and improved personalization.
        </>,
        <>
          <div>SEO Optimization</div> Boosted online search-ranking accuracy
          through SEO optimization, leveraging the AWS Lambda@Edge feature,
          resulting in a significant increase in organic traffic and website
          visibility.
        </>,
        <>
          <div>Performance Enhancement</div> Optimized performance by
          implementing proper memoization hooks and event handlers,
          significantly enhancing the user experience.
        </>,
        <>
          <div>Component Standardization</div> Commonized components to improve
          the developer experience, reducing the bug occurrence rate and
          streamlining the development process.
        </>,
      ],
    },
    {
      id: "collins",
      title: (
        <div>
          <a
            href="https://www.collinslife.co/"
            target="_blank"
            className="underline"
          >
            Collins
          </a>{" "}
          Commerce Website
        </div>
      ),
      desc: "I led the development and maintenance of the website for Collins, a commerce service providing household supplies. This project focused on enhancing user experience and optimizing content delivery.",
      stacks: ["React", "TypeScript", "Scss", "Mobx", "GSAP"],
      features: [
        <>
          <div>User Experience Enhancement</div> Implemented a landing page with
          parallax scrolling techniques and diverse animations to enhance user
          experience, making the website more engaging and interactive.
        </>,
        <>
          <div>Content Delivery Optimization</div> Optimized AWS S3 bucket
          configuration for image content to improve content delivery speed,
          ensuring faster load times and a smoother user experience.
        </>,
      ],
    },
  ]

  const color = {
    React: "bg-[#6FD6FF]",
    TypeScript: "bg-[#A9F1DF]",
    "Emotion.js": "bg-[#FF8C8C]",
    Recoil: "bg-[#FFFFC7]",
    "React-Query": "bg-[#A890FE]",
    Java: "bg-[#BFF098]",
    "Spring Boot": "bg-[#A9F1DF]",
    Scss: "bg-[#FFBBBB]",
    Mobx: "bg-[#A890FE]",
  }

  return (
    <section className="p-24px mb-16 lg:max-w-5xl lg:mx-auto lg:mb-[110px]">
      <div className="flex items-center">
        <Image
          src={Star}
          style={{
            width: "calc(40px + (110 - 40) * (100vw - 400px) / (1600 - 400))",
          }}
          alt="Star"
        />
        <h3 className="ml-2.5 font-eiko text-section font-medium leading-none tracking-[-0.03em]">
          Selected Projects
        </h3>
      </div>
      <ul className="mt-7 text-content leading-normal">
        {projects.map((p) => {
          return (
            <li
              key={p.id}
              onClick={() => setSelected(p.id)}
              onMouseEnter={() => selected !== p.id ? setIsHovered(true) : undefined}
              onMouseLeave={() => selected !== p.id ? setIsHovered(false) : undefined}
              className={`py-7 border-y ${selected !== p.id ? "cursor-pointer" : ""}`}
            >
              <div className="pl-24px relative text-title font-medium before:content-[''] before:block before:absolute before:top-[6px] before:left-[4px] before:w-2.5 before:h-2.5 before:bg-white before:rounded-full">
                {p.title}
              </div>
              <div
                className={`pl-24px transition-all duration-500 ease-in-out overflow-hidden ${
                  selected === p.id ? "mt-5  opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mb-5 flex flex-wrap gap-1">
                  {p.stacks?.map((s) => {
                    return (
                      <div
                        key={s}
                        className={`w-fit px-2.5 ${color[s as keyof typeof color] || "bg-[#FFFFC7]"} text-black font-bold opacity-80 rounded-full`}
                      >
                        {s}
                      </div>
                    )
                  })}
                </div>
                <div className="mb-5">{p.desc}</div>
                <ul>
                  {p.features?.map((f, i) => {
                    return (
                      <li
                        key={i}
                        className="mb-4 pl-[1em] relative before:absolute before:content-[''] before:block before:w-1 before:h-1 before:top-[8px] before:left-[4px] before:bg-white before:rounded-full"
                      >
                        {f}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
