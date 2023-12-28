import React from "react";
import styles from "./ContentPage.module.css";
import Introduction from "../Introduction/Introduction";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractices from "../AreaOfPractices/AreaOfPractices";
import WhatOurClientSays from "../WhatOurClientSays/WhatOurClientSays";

export default function ContentPage() {
  return (
    <div className={styles.content}>
      <Introduction />
      <ChooseUs />
      <AreaOfPractices />
      <WhatOurClientSays />
    </div>
  );
}
