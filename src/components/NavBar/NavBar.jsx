import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>
        <h1>Bot AI</h1>
      </div>
      <div className={styles.toggle}>🌗 Theme</div> {/* Dummy Theme toggle */}
    </nav>
  );
};

export default NavBar;
