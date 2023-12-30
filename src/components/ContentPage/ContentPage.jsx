import React from "react";
import styles from "./ContentPage.module.css";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import WhatOurClientSays from "../WhatOurClientSays/WhatOurClientSays";
import OurTeam from "../OurTeam/OurTeam";
import FAQ from "../FAQ/FAQ";
import Subscribe from "../Subscribe/Subscribe";

export default function ContentPage() {
  return (
    <div className={styles.content}>
      <Introduction />
      <ChooseUs />
      <AreaOfPractices />
      <WhatOurClientSays />
      <OurTeam />
      <FAQ />
      <Subscribe />
    </div>
  );
}
