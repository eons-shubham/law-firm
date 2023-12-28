import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.introductionBody}>
      <div>Let’s Introduce Ourself</div>
      <div className={styles.line} />
      <div>
        <p>Criminal Lawyer</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
