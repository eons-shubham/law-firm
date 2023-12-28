import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, name }) => {
  return (
    <div className={styles.cardbody}>
      <img src={image} alt="face" />
      <p>{name}</p>
      <p>Ceo of Hunt</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua
        dolor do amet sint. Velit officia
      </p>
    </div>
  );
};

export default Card;
