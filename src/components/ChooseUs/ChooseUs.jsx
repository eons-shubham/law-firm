import React from "react";
import Card from "./Card/Card";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <div className={styles.chooseUsBody}>
      <h3>Why Choose us?</h3>
      <div className={styles.cardgrid}>
        <Card value={98} />
        <Card value={100} />
        <Card value={100} />
      </div>
    </div>
  );
};

export default ChooseUs;
