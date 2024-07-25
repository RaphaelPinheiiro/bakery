import Link from "next/link";
import styles from "../styles/navbar.module.css";

import { cormorant, lora } from "./fonts";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1 className={cormorant.className}>Bakery</h1>
      <menu className={lora.className}>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#baker">Baker</Link>
        </li>
        <li>
          <Link href="#gallery">Gallery</Link>
        </li>
        <li>
          <Link href="#coffeebreak">Coffeebreak</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </menu>
    </nav>
  );
};

export default Navbar;
