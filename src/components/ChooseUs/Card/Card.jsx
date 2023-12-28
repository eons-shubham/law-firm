import React from "react";
import styles from "./Card.module.css";
import GiftIcon from "../../../assets/gift.png";

const Card = ({ value }) => {
  return (
    <div className={styles.cardBody}>
      <div className={styles.imageDiv}>
        <img src={GiftIcon} alt="Gift" />
      </div>
      <div className={styles.paraDiv}>
        <p>{value}% Success Rate</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer.
        </p>
      </div>
      <button>Read More</button>
    </div>
  );
};

export default Card;
