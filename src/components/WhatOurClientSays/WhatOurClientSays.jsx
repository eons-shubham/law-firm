import React from "react";
import styles from "./WhatOurClientSays.module.css";
import NavIcon from "../../assets/navicon.png";
import Card from "./Card/Card";
import Devon from "../../assets/devon.png";
import Jane from "../../assets/jane.png";
import Robert from "../../assets/robert.png";

const WhatOurClientSays = () => {
  return (
    <div className={styles.sectionBody}>
      <div className={styles.heading}>
        <p>What says our happy Clients</p>
        <img src={NavIcon} alt="navicon" width={200} height={91} />
      </div>
      <div className={styles.card}>
        <Card image={Jane} name={"Jane"} />
        <Card image={Devon} name={"Devon"} />
        <Card image={Robert} name={"Robert"} />
      </div>
    </div>
  );
};

export default WhatOurClientSays;
