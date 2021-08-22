import React, { useState } from "react";
import Nav from "./common/nav";
import Footer from "./common/footer";
import HamburgerMenu from "./hamburgerMenu";
import Image from "next/image";
import contact from "../public/icons/contact.svg";
import styles from "../styles/About.module.scss";

const Layout: React.FC<{}> = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Nav openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <main>{children}</main>
      <a
        target="_blank"
        href="mailto: minn602@gmail.com"
        className="contactIcon"
        rel="noreferrer"
      >
        <Image
          priority={true}
          src={contact}
          width={150}
          height={150}
          alt="contact icon"
        />
      </a>
      <Footer />
      {openMenu && <HamburgerMenu setOpenMenu={setOpenMenu} />}
    </>
  );
};

export default Layout;
