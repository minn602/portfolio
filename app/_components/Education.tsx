import Image from "next/image"
import Shape from "../_assets/shape1.png"

export default function Education() {
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
          Education
        </h3>
      </div>
      <ul className="mt-7 lg:mt-16 text-content leading-normal">
      <li className="mb-7">
          <div className="text-title">University of Sussex, England, United Kingdom</div>
          <div>MSc Advanced Computer Science</div>
          <div>Sep 2024 ~ Sep 2025</div>
        </li>
        <li className="mb-7">
          <div className="text-title">Korea National Open University, Seoul, South Korea</div>
          <div>Bachelor of Science in Computer Science</div>
          <div>Sep 2020 ~ Feb 2023</div>
        </li>
        <li className="mb-7">
          <div className="text-title">Wecode Coding Bootcamp, Seoul, South Korea</div>
          <div>Dec 2020 ~ Mar 2021</div>
        </li>
      </ul>
    </section>
  )
}
