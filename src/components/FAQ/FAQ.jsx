import React from "react";
import styles from "./FAQ.module.css";
import Plus from "../../assets/plus.png";

const FAQ = () => {
  return (
    <div className={styles.FAQBody}>
      <div className={styles.leftSide}>
        <p>FAQ</p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.qnaBody}>
        <div className={styles.qnaOpen}>
          <p>Do I need a personal injury report?</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
        </div>
        <div className={styles.qnaContent}>
          <p>How much is my case worth?</p>
          <img src={Plus} alt="more" />
        </div>
        <div className={styles.qnaContent}>
          <p>What should I do right after car accidect</p>
          <img src={Plus} alt="more" />
        </div>
        <div className={styles.qnaContent}>
          <p>How much is my case worth?</p>
          <img src={Plus} alt="more" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
