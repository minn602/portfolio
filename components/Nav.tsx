import Link from "next/link";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <h1>Minsun Portfolio 2021</h1>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <a target="_blank" href="https://minn602.github.io/" rel="noreferrer">
          <li>Blog</li>
        </a>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
