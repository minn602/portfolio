import { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/HamburgerMenu.module.scss";
import Image from "next/image";
import close from "../public/icons/close.svg";
import { moveScrollToId } from "../utils/utils";

interface IHamburgerMenu {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ setOpenMenu }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className={styles.Hamburger}>
      <Image
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
        className={styles.close}
        src={close}
        priority={true}
        loading="eager"
        alt="toggle menu"
        width={24}
        height={24}
      />
      <Link href="/works">
        <div onClick={() => setOpenMenu(false)}>Works</div>
      </Link>
      <Link href="/projects">
        <div onClick={() => setOpenMenu(false)}>Projects</div>
      </Link>
      <Link href="/">
        <div
          onClick={() => {
            setOpenMenu(false);
            // moveScrollToId("about13");
          }}
        >
          Contact
        </div>
      </Link>
    </div>
  );
};

export default HamburgerMenu;
