import Image from "next/image";
import Shape from "../_assets/shape4.png";

export default function Other() {
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
          Other Experience
        </h3>
      </div>
      <ul className="mt-7 lg:mt-16 text-lg leading-normal">
        <li className="mb-7">
          <div className="text-xl font-bold">
            AWS Certified Developer – Associate (DVA)
          </div>
          <div>Amazon Web Services (AWS)</div>
          <div>Issued Aug 2024 · Expires Aug 2027</div>
        </li>
        <li>
          <div className="text-xl font-bold">SQL Developer Certification</div>
          <div>KOREA Data Agency</div>
          <div>Issued Sep 2022</div>
        </li>
      </ul>
    </section>
  );
}
