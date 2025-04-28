import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, background, handleClick, width }) => {
  return (
    <button
      className={styles.button}
      style={{
        background,
        width,
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
