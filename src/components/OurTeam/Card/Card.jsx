import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, name, cases, specialGrade }) => {
  return (
    <div className={specialGrade ? styles.specialGrade : null}>
      <div className={styles.cardBody}>
        <div className={styles.image}>
          <img src={image} alt="avatar" width={68} height={68} />
        </div>
        <div className={styles.textBody}>
          <p>{name}</p>
          <p>{cases} Cases</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
