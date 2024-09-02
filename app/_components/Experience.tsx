import Image from "next/image"
import Shape from "../_assets/shape3.png"

export default function Experience() {
  return (
    <section className="p-24px mb-16 lg:max-w-5xl lg:mx-auto lg:mb-[110px]">
      <div className="flex items-center">
        <Image
          src={Shape}
          style={{
            width: "calc(40px + (110 - 40) * (100vw - 400px) / (1600 - 400))",
          }}
          alt="Shape"
        />
        <h3 className="ml-2.5 font-eiko text-section font-medium leading-none tracking-[-0.03em]">
          Work Experience
        </h3>
      </div>
      <ul className="mt-7 lg:mt-16 relative before:content-[''] before:block before:absolute before:top-[10px] before:left-[8px] before:border-l custom-border">
        <li className="mb-10 pl-24px text-content leading-normal  relative before:content-[''] before:block before:absolute before:top-[6px] before:left-[4px] before:w-2.5 before:h-2.5 before:bg-white before:rounded-full">
          <div className="text-title leading-normal">NHN, Seongnam, South Korea</div>
          <div>Software Engineer</div>
          <div>Jan 2022 ~ Aug 2024</div>
        </li>
        <li className="mb-10 pl-24px text-content leading-normal relative before:content-[''] before:block before:absolute before:top-[6px] before:left-[4px] before:w-2.5 before:h-2.5 before:bg-white before:rounded-full">
          <div className="text-title leading-normal">Gitt, Seoul, South Korea</div>
          <div>Frond-end Developer</div>
          <div>Apr 2021 ~ Jan 2022</div>
        </li>
        <li className="pl-24px text-content leading-normal relative before:content-[''] before:block before:absolute before:top-[6px] before:left-[4px] before:w-2.5 before:h-2.5 before:bg-white before:rounded-full">
          <div className="text-title leading-normal">Uitti, Seoul, South Korea</div>
          <div>Frond-end Developer</div>
          <div>Feb 2021 ~ Mar 2021</div>
        </li>
      </ul>
    </section>
  )
}
