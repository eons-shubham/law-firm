import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Logo />
      </div>
      <div className={styles.option}>
        <p>Home</p>
        <p>Attorneys</p>
        <p>Practice Areas</p>
        <p>About Us</p>
      </div>
      <div className={styles.btn}>
        <button>Contact Now</button>
      </div>
    </nav>
  );
}
