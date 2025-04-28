import React from "react";
import Button from "../Button/Button"; // Assuming you already have a Button component
import styles from "./FormContainer.module.css";

const FormContainer = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContainerInput}>
          <input
            type="text"
            placeholder="Type your message..."
            className={styles.input}
          />
        </div>

        <div className={styles.buttonsContainer}>
          <Button background="#7d7dff" width="100px">
            Ask
          </Button>
          <Button background="#7d7dff" width="100px">
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default FormContainer;
