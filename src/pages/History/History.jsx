import React from "react";
import Card from "../../components/Card/Card";
import styles from "./History.module.css";

const History = () => {
  return (
    <div className={styles.historyPage}>
      <h1 className={styles.heading}>Conversation History</h1>

      <div className={styles.filterSection}>
        <label>Filter by rating</label>
        <select className={styles.dropdown}>
          <option>All Ratings</option>
          <option>1 Star</option>
          <option>2 Stars</option>
          <option>3 Stars</option>
          <option>4 Stars</option>
          <option>5 Stars</option>
        </select>
      </div>

      <h2 className={styles.subHeading}>Today's chats</h2>

      <div className={styles.cardList}>
        <Card
          avatar="https://i.ibb.co/3FFq1mC/avatar1.png"
          name="You"
          time="06:07 PM"
          message="Hi, what is the weather"
          bgColor="purple"
        />
        <Card
          avatar="https://i.ibb.co/X74kxy3/bot-avatar.png"
          name="Soul AI"
          time="06:07 PM"
          message="I'm sorry for any confusion, but I can't provide real-time information such as current temperature or weather updates. You can check the temperature by using a weather website or app, or by asking a smart assistant like Siri, Google Assistant, or Alexa."
          bgColor="lightpurple"
          rating={4}
          feedback="Very helpful response, thank you!"
        />
      </div>
    </div>
  );
};

export default History;
