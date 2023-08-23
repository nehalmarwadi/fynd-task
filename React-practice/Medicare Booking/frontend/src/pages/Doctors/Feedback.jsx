import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";
import "../Doctors/Feedback.scss"

const Feedback = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="container-fb ">
        <h4 className="heading-fb ">
          All reviews (272)
        </h4>

        <div className="custom-fb ">
          <div className="div-fb ">
            <figure className="figure-fb ">
              <img className="img-fb" src={avatar} alt="" />
            </figure>
            <div>
              <h5 className="heading5-fb">
                Tony Stark
              </h5>
              <p className="p-fb ">
                {formateDate ("02-14-20")}
              </p>
              <p className="text_para ">
                Good services , highly recommended 👍
              </p>
            </div>
          </div>

          <div className="end-fb ">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067FF" />
            ))}
          </div>
        </div>
      </div>
 
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => {setShowFeedbackForm(true)}}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
