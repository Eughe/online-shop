import React from "react";
import styles from "./index.module.css";

export const MainMenu = () => {
  return (
    <nav className={styles.p}>
      <button>user</button>
      <button>contacts</button>
      <button>shop</button>
      <button>cart</button>
    </nav>
  );
};
