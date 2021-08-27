import Link from "next/link";
import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import menu from "../../public/icons/menu.svg";
import close from "../../public/icons/close.svg";

interface INav {
  openMenu: boolean;
  setOpenMenu: any;
}

const Nav: React.FC<INav> = ({ openMenu, setOpenMenu }) => {
  return (
    <nav className={styles.Nav}>
      <Link href="/">
        <h1>
          <Image
            loading="eager"
            priority={true}
            src={logo}
            alt="minsun portfolio logo"
          />
        </h1>
      </Link>
      <Image
        onClick={() => setOpenMenu((prev: boolean) => !prev)}
        className={styles.menubar}
        src={menu}
        loading="eager"
        priority={true}
        alt="toggle menu"
        width={24}
        height={24}
      />
      <ul className={styles.menuList}>
        <Link href="/works">
          <li>Works</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
