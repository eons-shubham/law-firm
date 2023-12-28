import React from "react";
import styles from "./Card.module.css";

const Card = ({ Card1, Card2, val1, val2, cardLength }) => {
  return (
    <div className={styles.cardBody}>
      <div className={cardLength ? styles.smallCard : styles.longCard}>
        <img src={Card1} alt="cardimage" />
        <span>{val1}</span>
      </div>
      <div className={!cardLength ? styles.smallCard : styles.longCard}>
        <img src={Card2} alt="cardimage" />
        <span>{val2}</span>
      </div>
    </div>
  );
};

export default Card;
