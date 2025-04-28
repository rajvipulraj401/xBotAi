// import React, { useState } from "react";
// import styles from "./Card.module.css";

// const Card = ({
//   avatar,
//   name,
//   time,
//   message,
//   bgColor,
//   rating,
//   feedback, //state hai
//   handleDislikeClick,
//   handleLikeClick,
//   handleRating,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   // const [showRating, setShowRating] = useState(false);
//   // const [showModal, setShowModal] = useState(false);

//   // const handleLikeClick = () => {
//   //   setShowRating(!showRating);
//   // };
//   // const handleDislikeClick = () => {
//   //   setShowModal(!showModal);
//   // };
//   /* Logic -- when mouse enters the card show the btn container and when leave remove it */
//   const cardStyles = {
//     backgroundColor: bgColor,
//   };
//   return (
//     <>
//       <div
//         className={`${styles.card}`}
//         style={cardStyles}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Left - Avatar */}
//         <div className={styles.leftSection}>
//           <img src={avatar} alt="Avatar" className={styles.avatar} />
//         </div>

//         {/* Right - Content */}
//         <div className={styles.rightSection}>
//           <h3 className={styles.name}>{name}</h3>

//           <p className={styles.message}>{message}</p>

//           <div className={styles.timeAndBtn}>
//             <p className={styles.time}>{time}</p>
//             {/* Buttons container */}
//             {/* Step 4: Conditionally show buttons */}
//             {isHovered && (
//               <div className={styles.btnContainer}>
//                 <button className={styles.likeBtn} onClick={handleLikeClick}>
//                   👍
//                 </button>
//                 <button
//                   className={styles.dislikeBtn}
//                   onClick={handleDislikeClick}
//                 >
//                   👎
//                 </button>
//               </div>
//             )}
//           </div>
//           {/* <p className={styles.time}>{time}</p> */}

//           {handleRating && (
//             <div className={styles.ratingContainer}>
//               <p className={styles.rateText}>Rate this response:</p>
//               <div className={styles.stars}>
//                 {[...Array(5)].map((_, index) => (
//                   <span
//                     key={index}
//                     className={
//                       index < rating ? styles.filledStar : styles.emptyStar
//                     }
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           )}

//           {feedback && (
//             <p className={styles.feedback}>
//               <strong>Feedback:</strong> {feedback}
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;

// ----------------version 2 (by adding rating function)-----------

import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({
  avatar,
  name,
  time,
  message,
  bgColor,
  rating = 0,
  feedback,
  handleDislikeClick,
  handleLikeClick,
  handleRating, // if this is true, show rating stars
  onRatingChange, // callback prop to notify parent when user clicks a star
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverRating, setHoverRating] = useState(null); // for star hover effect

  const cardStyles = {
    backgroundColor: bgColor,
  };

  const starsCount = 5;

  const handleStarMouseEnter = (index) => {
    setHoverRating(index + 1); // stars index 0-based, rating is 1-based
  };

  const handleStarMouseLeave = () => {
    setHoverRating(null);
  };

  const handleStarClick = (index) => {
    if (onRatingChange) {
      onRatingChange(index + 1);
    }
  };

  return (
    <div
      className={`${styles.card}`}
      style={cardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left - Avatar */}
      <div className={styles.leftSection}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
      </div>

      {/* Right - Content */}
      <div className={styles.rightSection}>
        <h3 className={styles.name}>{name}</h3>

        <p className={styles.message}>{message}</p>

        <div className={styles.timeAndBtn}>
          <p className={styles.time}>{time}</p>
          {isHovered && (
            <div className={styles.btnContainer}>
              <button className={styles.likeBtn} onClick={handleLikeClick}>
                👍
              </button>
              <button
                className={styles.dislikeBtn}
                onClick={handleDislikeClick}
              >
                👎
              </button>
            </div>
          )}
        </div>

        {/* Rating stars */}
        {handleRating && (
          <div
            className={styles.ratingContainer}
            onMouseLeave={handleStarMouseLeave}
          >
            <p className={styles.rateText}>Rate this response:</p>
            <div className={styles.stars}>
              {[...Array(starsCount)].map((_, index) => {
                const fillLevel = hoverRating !== null ? hoverRating : rating;
                const isFilled = index < fillLevel;

                return (
                  <span
                    key={index}
                    className={isFilled ? styles.filledStar : styles.emptyStar}
                    onMouseEnter={() => handleStarMouseEnter(index)}
                    onClick={() => handleStarClick(index)}
                    style={{ cursor: "pointer" }}
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <p className={styles.feedback}>
            <strong>Feedback:</strong> {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
