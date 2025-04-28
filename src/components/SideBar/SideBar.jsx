import React from "react";
import styles from "./SideBar.module.css";
import Button from "../Button/Button"; // Apna button

import aiSmall from "../../assets/aiSmall.png";
import write from "../../assets/write.png";
const SideBar = ({ handleNewChat, handleHistory }) => {
  return (
    <div className={styles.sidebarContainer}>
      {/* New Chat Button */}
      <Button handleClick={handleNewChat}>
        <div className={styles.buttonContent}>
          <img
            src={aiSmall} // Apna image path
            alt="Logo"
            className={styles.logoImage}
          />
          <span className={styles.buttonText}>New Chat</span>
          <img
            src={write} // Apna image path
            alt="write"
            className={styles.logoWrite}
          />
        </div>
      </Button>

      {/* Past Conversations Button */}
      <Button handleClick={handleHistory}>
        <div className={styles.buttonContent}>
          <span className={styles.buttonText}>Past Conversations</span>
        </div>
      </Button>
    </div>
  );
};

export default SideBar;
