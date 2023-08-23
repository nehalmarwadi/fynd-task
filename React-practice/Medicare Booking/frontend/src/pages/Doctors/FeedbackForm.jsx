import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "../Doctors/FeedbackForm.scss"

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const handleSubmitReview = async (e) => {
    e.preventDefault(); 
    // later we will use our api
  }; 
  return (
    <form action="">
      <div>
        <h3 className="heading-FF">
          How would you rate the overall experience?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type="button"
                className={`${
                  index < (rating & hover || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer `}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="div-ff">
        <h3 className="heading3-ff">
          Share your feedback or suggestions*
        </h3>
        <textarea
          className="msg-box "
          rows="5"
          placeholder="Write your message"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" onClick={handleSubmitReview} className="btn">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
