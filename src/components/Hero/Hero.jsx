import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/hero.png";
import MessageIcon from "../../assets/messageicon.png";

export default function Hero() {
  return (
    <div className={styles.herosection}>
      <div className={styles.description}>
        <p>You don’t have to Fight them Alone.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </p>
        <div className={styles.inputArea}>
          <input type="text" placeholder="Enter your eamil address" />
          <img src={MessageIcon} alt="message" />
          <button>Let’s Talk</button>
        </div>
      </div>
      <div className={styles.bannerImage}>
        <img src={HeroImage} alt="Hero" height={544} />
      </div>
    </div>
  );
}
