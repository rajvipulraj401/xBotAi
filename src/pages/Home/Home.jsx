import React from "react";
import InitialScreen from "../../components/InitialScreen/InitialScreen";
import styles from "./Home.module.css";
import FormContainer from "../../components/FormContainer/FormContainer";
import Card from "../../components/Card/Card";

const Home = ({ handleAsk, handleSave }) => {
  const homeContainer = {
    width: "100%",
    height: "87%",
  };
  return (
    <>
      <div className={styles.homeContainer} style={homeContainer}>
        <InitialScreen></InitialScreen>
      </div>

      {/* <div className={styles.homeContainer}>
        <Card
          name="You"
          time="2:30pm"
          message="How are you"
          bgColor="skyblue"
          rating={3}
        />
      </div> */}
      {/* <FormContainer></FormContainer> */}
      <FormContainer
        handleAsk={handleAsk}
        handleSave={handleSave}
      ></FormContainer>
    </>
  );
};

export default Home;
