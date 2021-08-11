import styles from "../../styles/Nav.module.scss";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import menu from "../../public/icons/menu.svg";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <h1>
        <Image src={logo} alt="minsun portfolio logo" />
      </h1>
      <Image
        className={styles.menubar}
        src={menu}
        alt="open menu list button"
        width={24}
        height={24}
      />
    </nav>
  );
};

export default Nav;
