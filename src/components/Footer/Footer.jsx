import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import SocialMedia from "../../assets/socialmedia.png";

const Footer = () => {
  return (
    <div className={styles.footerBody}>
      <Logo />
      <div className={styles.footerContent}>
        <div className={styles.top}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practise Areas</p>
          <p>About Us</p>
          <img src={SocialMedia} alt="social media" width={187} height={30} />
        </div>
        <div className={styles.bottom}>
          <p>© 2020 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
