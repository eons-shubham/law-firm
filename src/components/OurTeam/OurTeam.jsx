import React from "react";
import styles from "./OurTeam.module.css";
import Card from "./Card/Card";
import Lawyer1 from "../../assets/lawyer1.png";
import Lawyer2 from "../../assets/lawyer2.png";
import Lawyer3 from "../../assets/lawyer3.png";
import Lawyer4 from "../../assets/lawyer4.png";
import Lawyer5 from "../../assets/lawyer5.png";
import Lawyer6 from "../../assets/lawyer6.png";

const OurTeam = () => {
  return (
    <div className={styles.teamBody}>
      <p className={styles.heading}>Our Team</p>
      <div className={styles.yaxis}>
        <div className={styles.xaxis}>
          <Card image={Lawyer1} name={"Danial Def"} cases={301} />
          <Card image={Lawyer2} name={"Sanfole"} cases={850} specialGrade={1} />
          <Card image={Lawyer3} name={"Cesforila"} cases={470} />
        </div>
        <div className={styles.xaxis}>
          <Card image={Lawyer4} name={"Colleen"} cases={180} />
          <Card image={Lawyer5} name={"Haldone"} cases={212} />
          <Card image={Lawyer6} name={"Nik Jeo"} cases={350} />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
