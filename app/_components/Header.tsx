import Image from "next/image"
import Logo from "../_assets/logo.png"

export default function Header() {
  return (
    <header className="w-full p-24px">
      <Image
        src={Logo}
        alt="Logo"
        style={{
          width: "calc(130px + (275 - 130) * (100vw - 400px) / (1600 - 400))",
        }}
      />
    </header>
  )
}
