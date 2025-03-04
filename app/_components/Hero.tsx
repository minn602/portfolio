"use client";
import Image from "next/image";
import Arrow from "../_assets/arrow.png";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const linesRef = useRef<HTMLHeadingElement>(null);
  const animationSetup = useRef(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };

    checkTheme();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (animationSetup.current) return;

    const spans = linesRef.current?.querySelectorAll("span.gradient-target");

    if (spans && spans.length > 0) {
      const gradients = [
        "linear-gradient(90deg, #C6EA8D, #FE90AF)",
        "linear-gradient(180deg, #D8B5FF, #1EAE98)",
        "linear-gradient(180deg, #FCA5F1, #B5FFFF)",
      ];

      spans.forEach((span, index) => {
        const originalText = span.textContent || "";

        span.innerHTML = `
          <span class="text-original absolute top-0 left-0 right-0">${originalText}</span>
          <span class="text-gradient">${originalText}</span>
        `;

        const gradientText = span.querySelector(
          ".text-gradient"
        ) as HTMLElement;
        if (gradientText) {
          gradientText.style.backgroundImage =
            gradients[index % gradients.length];
          gradientText.style.backgroundClip = "text";
          gradientText.style.webkitBackgroundClip = "text";
          gradientText.style.color = "transparent";
          gradientText.style.opacity = "0";
        }
      });

      animationSetup.current = true;
    }
  }, []);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const lines = linesRef.current?.querySelectorAll("div");

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
        }
      );
    }

    const spans = linesRef.current?.querySelectorAll("span.gradient-target");

    if (spans && spans.length > 0) {
      spans.forEach((span, index) => {
        const steps = [3, 2, 1];

        const gradientText = span.querySelector(
          ".text-gradient"
        ) as HTMLElement;
        const originalText = span.querySelector(
          ".text-original"
        ) as HTMLElement;

        if (gradientText && originalText) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: linesRef.current,
                start: `top ${steps[index] * 8}%`,
                toggleActions: "play none none reverse",
              },
            })
            .to(
              gradientText,
              {
                opacity: 1,
                duration: 0.8,
                ease: "power2.inOut",
              },
              0
            )
            .to(
              originalText,
              {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
              },
              0
            );
        }
      });
    }
  }, [theme]);

  return (
    <section className="py-20 px-6 flex flex-col justify-center lg:max-w-5xl lg:mx-auto">
      <h1 ref={linesRef} className="text-hero font-medium leading-none">
        <div>Hi,</div>
        <div>
          I&#39;m{" "}
          <span className="font-eiko relative gradient-target">Minsun</span>.
        </div>
        <div className="font-eiko">
          <span className="relative gradient-target">Frontend</span>
        </div>
        <div>Engineer</div>
        <div>
          Based in{" "}
          <span
            style={{ paddingBottom: "25px", display: "inline-block" }}
            className="font-eiko relative gradient-target"
          >
            London
          </span>
          .
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
  );
}
