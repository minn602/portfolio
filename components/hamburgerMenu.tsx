import Link from "next/link";
import styles from "../styles/HamburgerMenu.module.scss";
import Image from "next/image";
import close from "../public/icons/close.svg";

interface IHamburgerMenu {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu: React.FC<IHamburgerMenu> = ({ setOpenMenu }) => {
  return (
    <div className={styles.Hamburger}>
      <Image
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
        className={styles.close}
        src={close}
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
      <div>Contact</div>
    </div>
  );
};

export default HamburgerMenu;
