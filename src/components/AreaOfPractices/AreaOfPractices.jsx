import React from "react";
import styles from "./AreaOfPractices.module.css";
import Card from "./Card/Card";
import Card1 from "../../assets/card1.png";
import Card2 from "../../assets/card2.png";
import Card3 from "../../assets/card3.png";
import Card4 from "../../assets/card4.png";
import Card5 from "../../assets/card5.png";
import Card6 from "../../assets/card6.png";

const AreaOfPractices = () => {
  return (
    <div className={styles.areaOfPracticesBody}>
      <p>Area of Practices</p>
      <Card
        Card1={Card1}
        Card2={Card2}
        val1={"BUSINESS LAW"}
        val2={"Partnership LAW"}
        cardLength={0}
      />
      <Card
        Card1={Card3}
        Card2={Card4}
        val1={"REAL ESTATE LAW"}
        val2={"BUSINESS LAW"}
        cardLength={1}
      />
      <Card
        Card1={Card5}
        Card2={Card6}
        val1={"LANDLORD DISPUTES"}
        val2={"ELDER ABUSE"}
        cardLength={0}
      />
    </div>
  );
};

export default AreaOfPractices;
