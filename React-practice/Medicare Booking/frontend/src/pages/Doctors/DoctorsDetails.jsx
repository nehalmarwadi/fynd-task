import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import "../Doctors/DoctorsDetails.scss"

const DoctorsDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="DD-container">
        <div className="DD-custom">
          <div className="DD-div">
            <div className="DD-img ">
              <figure className="DD-figure ">
                <img src={doctorImg} alt="" className="Doc-img " />
              </figure>

              <span className="span1-DD">Surgeon</span>
              <h3 className="h3_DD ">Nehal Marwadi</h3>
              <div className="div-doc-details ">
                <span className="span2-DD ">
                  <img src={starIcon} alt="" /> 4.8
                </span>
                <span className="span3-DD ">(272)</span>
              </div>
              <p className="text_para ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                aspernatur!
              </p>
            </div>

            <div className="about-feedback">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "nav-link-active"
                } nav-link`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "nav-link-active"
                } nav-link`}
              >
                Feedback
              </button>
            </div>

            <div className="end-DD">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsDetails;
