import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribeBody}>
      <div className={styles.content}>
        <p className={styles.heading}>Subscribe Our Newsletter</p>
        <div className={styles.inputRegion}>
          <input type="text" placeholder="Name:" />
          <input type="text" placeholder="Enter your Email" />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
