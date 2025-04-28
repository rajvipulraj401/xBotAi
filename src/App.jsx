import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import InitialScreen from "./components/InitialScreen/InitialScreen";
import History from "./pages/History/History";
import SideBar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";

import Card from "./components/Card/Card";
import ChatCard from "./components/ChatCard/ChatCard";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";

import "./App.css";

import human from "./assets/human.png";
import aiLarge from "./assets/aiLarge.png";

const App = () => {
  const navigate = useNavigate();
  const [showRating, setShowRating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  // All functions below here ------

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // const handleHistory = () => {
  //   navigate("/history"); // '/history' page par chale jao
  // };
  // const handleNewChat = () => {
  //   navigate("/"); // '/history' page par chale jao
  // };

  const handleLikeClick = () => {
    setShowRating(!showRating);
  };
  const handleDislikeClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  const handleFeedback = (data) => {
    // console.log(data);
    setFeedback(data); // the return data set tofeed back
    setShowModal(!showModal);
  };
  return (
    <>
      <main className="main-container">
        {/* div main */}
        <aside className="sidebar-div">
          <SideBar
          // handleHistory={handleHistory}
          // handleNewChat={handleNewChat}
          ></SideBar>
        </aside>
        <section className="section-div-container">
          <nav className="navbar-container">
            <NavBar></NavBar>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>

          {/* <Home></Home> */}

          {/* <Card
            avatar={human}
            name="You"
            time="2:30pm"
            message="How are you"
            bgColor="skyblue"
            rating={rating}
            feedback={feedback}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleRating={showRating}
            onRatingChange={handleRatingChange}
          />

          <Card
            avatar={aiLarge}
            name="Soul Ai"
            time="2:30pm"
            message="How are you"
            bgColor=""
            skyblue
            rating="3"
            feedback={feedback}
            handleLikeClick={handleLikeClick}
            handleDislikeClick={handleDislikeClick}
            handleRating={showRating}
          ></Card> */}
        </section>
      </main>

      {/* mODAL --- PASS THIS modal handle close  , and handle submit to close modal and submit feedback for submit */}

      {showModal && (
        <div className="modalContainer">
          <Modal onClose={handleCloseModal} onConfirm={handleFeedback}></Modal>
          {/* <Modal></Modal> */}
        </div>
      )}
    </>
  );
};

export default App;
