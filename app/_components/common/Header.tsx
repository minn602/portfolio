import Image from "next/image";
import Logo from "../../_assets/logo.png";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <nav className="w-full pt-8 pb-12 flex justify-between items-center">
      <Link href={"/"} className="block">
        <Image src={Logo} alt="Logo" width={136} height={40} />
      </Link>
      <ThemeSwitch />
    </nav>
  );
}
