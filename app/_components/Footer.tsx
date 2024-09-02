import Image from "next/image"
import Clover from "../_assets/shape2.png"
import LinkedIn from "../_assets/icon/linkedin.png"
import Google from "../_assets/icon/google.png"
import Github from "../_assets/icon/github.png"

export default function Footer() {
  return (
    <footer className="p-24px bg-white text-black">
      <div className="flex items-center lg:max-w-5xl lg:mx-auto">
        <Image
          src={Clover}
          style={{
            width: "calc(40px + (110 - 40) * (100vw - 400px) / (1600 - 400))",
          }}
          alt="Clover"
        />
        <h3 className="ml-2.5 font-eiko text-section font-medium leading-none tracking-[-0.03em]">
          Contacts
        </h3>
      </div>
      <div className="flex items-center gap-x-1 mt-7 mb-7 lg:max-w-5xl lg:mx-auto lg:mt-16">
        <a
        className="cursor-pointer"
          target="_blank"
          href="https://www.linkedin.com/in/minsunjung/"
        >
          <Image src={LinkedIn} width={48} height={48} alt="Linked in" />
        </a>
        <a         className="cursor-pointer" target="_blank" href="https://github.com/minn602">
          <Image src={Github} width={48} height={48} alt="Github" />
        </a>
        <a         className="cursor-pointer" href="mailto:cindyminsun@gmail.com">
          <Image src={Google} width={40} height={40} alt="Google" />
        </a>
      </div>
      <div className="border-t border-black lg:max-w-5xl lg:mx-auto" />
      <div className="text-xs pt-24px flex justify-between lg:max-w-5xl lg:mx-auto">
        <span>2024</span>
        <span>© MINSUN JUNG</span>
      </div>
    </footer>
  )
}
