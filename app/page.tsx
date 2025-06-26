"use client";
import LinkArrow from "./_components/common/LinkArrow";
import PostGrid from "./_components/common/PostGrid";
import ModelGrid from "./_components/common/ModelGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-16 flex flex-col lg:flex-row lg:gap-6">
      <section className="mb-16 lg:w-1/3">
        <h1 className="mb-4 text-3xl font-eiko font-bold md:text-4xl">
          Minsun Jung
        </h1>
        <p className="mb-4">Frontend Engineer</p>
        <p className="mb-4">
          Motivated to help people around me using React / Next.js, Typescript,
          Tailwind CSS.
        </p>
        <div className="contacts flex items-center gap-2 mb-8">
          <Link target="_blank" href="https://www.linkedin.com/in/minsunjung/">
            <svg
              className="w-[40px] h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
            </svg>
          </Link>
          <Link target="_blank" href="https://github.com/minn602">
            <svg
              className="w-[40px] h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <Link target="_blank" href="mailto:minsun.dev@gmail.com">
            <svg
              className="w-[40px] h-[40px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
            </svg>
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/15wrM7XBSAzsr23_bCdUk17RbG4K3_wNP/view?usp=drive_link"
          >
            <svg
              className="w-[40px] h-[40px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
            </svg>
          </Link>
        </div>
        <LinkArrow href="/about" className="opacity-80 hover:opacity-100">
          More about me
        </LinkArrow>
      </section>
      <section className="lg:w-2/3">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-eiko font-bold tracking-tight md:text-4xl">
            Featured Posts
          </h2>
          <LinkArrow href="/blog" className="opacity-80 hover:opacity-100">
            Read all posts
          </LinkArrow>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-[343px] md:max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <PostGrid
              title="My Journey as a Frontend Developer"
              date="2025-03-06"
              slug="My-Journey-as-a-Frontend-Developer"
              background="linear-gradient(90deg, rgba(198,234,141,1) 0%, rgba(254,144,175,1) 100%)"
              grid="col-span-2 row-span-2 lg:row-span-1 aspect-square lg:aspect-[2/1]"
            />
            <PostGrid
              title="Frontend Testing Frameworks in 2025"
              date=""
              slug="Frontend-Testing-Frameworks-in-2025"
              background="linear-gradient(0deg, rgba(0,183,255,1) 0%, rgba(255,255,199,1) 100%)"
              grid="col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square"
            />
            <ModelGrid
              grid="md:row-span-2 aspect-square md:aspect-[1/2]"
              modelPath="/models/DOG.glb"
              position={[0, -2.5, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <ModelGrid
              grid="row-span-2 aspect-[1/2] lg:row-span-1 lg:aspect-square"
              modelPath="/models/SHELL.glb"
              position={[0, -1, 0]}
              rotation={[Math.PI / 4, Math.PI, 0]}
            />
            <ModelGrid
              grid="row-span-2 aspect-[1/2] md:col-span-2 md:row-span-1 md:aspect-[2/1] lg:col-span-1 lg:aspect-square"
              modelPath="/models/HEART.glb"
            />
            <ModelGrid
              grid="aspect-square lg:row-span-2 lg:aspect-[1/2]"
              modelPath="/models/JELLY.glb"
              position={[0, -1, 0]}
              rotation={[Math.PI / 4, 0, 0]}
            />
            <PostGrid
              title="Frontend Performance Optimization with Real Practice"
              date=""
              slug="Frontend-Performance-Optimization-with-Real-Practice"
              background="linear-gradient(0deg, rgba(191,240,152,1) 0%, rgba(111,214,255,1) 100%)"
              grid="col-span-2 row-span-2 aspect-square lg:row-span-1 lg:aspect-[2/1]"
            />
            <PostGrid
              title="Zustand A Modern State Management Solution"
              date=""
              slug="Zustand-A-Modern-State-Management-Solution"
              background="radial-gradient(circle, rgba(234,141,141,1) 0%, rgba(168,144,254,1) 100%)"
              grid="col-span-2 row-span-2 aspect-square md:row-span-1 md:aspect-[2/1] lg:col-span-1 lg:aspect-square"
            />
            <PostGrid
              background="radial-gradient(circle, rgba(252,165,241,1) 0%, rgba(181,255,255,1) 100%)"
              grid="col-span-2 aspect-[2/1] md:row-span-2 md:aspect-square"
            />
            <div className="invisible md:visible lg:hidden"></div>
            <ModelGrid
              grid="row-span-2 col-span-2 aspect-square md:row-span-1 md:col-span-1 md:aspect-square lg:col-span-2 lg:aspect-[2/1]"
              modelPath="/models/PRESENT.glb"
              rotation={[Math.PI / 4, Math.PI / 4, 0]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
