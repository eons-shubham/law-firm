import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.container}>
      <img src={LogoImage} alt="Logo" width={30} />
      <span>IGSTUDIO</span>
    </div>
  );
}
