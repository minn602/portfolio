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
  const getThisYear = () => {
    const date = new Date();
    const year = date.getFullYear();

    return year;
  };

  return (
    <nav className={styles.Nav}>
      <Link href="/">
        <h1>MINSUN JUNG</h1>
      </Link>
      <h1>{getThisYear()}</h1>
    </nav>
  );
};

export default Nav;
