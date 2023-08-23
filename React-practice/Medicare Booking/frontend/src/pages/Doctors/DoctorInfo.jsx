import React from "react";
import starIcon from "../../assets/images/Star.png";
import photodoc from "../../assets/images/about.png";
import "../Doctors/DoctorInfo.scss";

const DoctorInfo = ({ doctor }) => {
  return (
    <>
      <div className="container-docinfo">
        <div className="left-docinfo">
          <div className="button-div">
            <button type="button" className="btn btn-outline-secondary button-doc-info-3 ">
              Overview
            </button>
            <button type="button" className="btn btn-outline-secondary button-doc-info-3 ">
              Appointments
            </button>
            <button type="button" className="btn btn-outline-secondary button-doc-info-3 ">
              Profile
            </button>
          </div>

          <div className="button-div2">
            <button type="button" className="btn btn-dark button-doc-info-3 ">
              Logout
            </button>
            <button type="button" className="btn btn-danger button-doc-info-3 ">
              Delete Account
            </button>
          </div>
        </div>

        <div className="right-docinfo">
            <div className="overview-docinfo">
          <div className="first-docinfo">
            <img src={photodoc} className="photo-docinfo" alt="" />
           

            <div className=" star-docinfo">
            <h2 className="heading-dc ">Bruce Banner</h2>
              <span className=" star-icon">
                <img src={starIcon} className="" alt="" />
                <span className=" rating">(0)</span>
              </span>
              
            
            </div>
          </div>

          <div className="detail-docinfo ">
            <p className="p-docinfo">
              About of<span className="doc-name">  Bruce Banner </span>
            </p>
            <div>
              <h2>Education</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
                Similique quam officiis magnam, ratione quaerat tempora<br/>
                cupiditate error alias veniam laudantium praesentium odio<br/>
                blanditiis modi!
              </p>
            </div>
            <div>
              <h2>Experience</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/>
                Similique quam officiis magnam, ratione quaerat tempora<br/>
                cupiditate error alias veniam laudantium praesentium odio<br/>
                blanditiis modi!
              </p>
            </div>
            </div>
          </div>

          
        </div>

      </div>

    </>
  );
};

export default DoctorInfo;
