import React from "react";

import reviewData from "./reviewData";

function Reviews() {
  const reviewDataElements = reviewData.map(review => {
    return (
      <div className="review__wrapper">
        <span className="review__stars">
          <img alt="" src="./starfilled.svg"></img>
          <img alt="" src="./starfilled.svg"></img>
          <img alt="" src="./starfilled.svg"></img>
          <img alt="" src="./starfilled.svg"></img>
          <img alt="" src="./starfilled.svg"></img>
        </span>

        <p>{review.description}</p>
        <div className="review__details">
          <div className="review__initials">
            {review.name[0]}
            {review.name.split(" ")[1].charAt(0)}
          </div>
          <p>
            {review.name} | {review.device}
          </p>
        </div>
      </div>
    );
  });

  return <section className="review">{reviewDataElements}</section>;
}

export default Reviews;
