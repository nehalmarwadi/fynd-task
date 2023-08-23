import React, { useState } from "react";
import MyBooking from "../pages/MyBooking";
// import Settings from "../pages/SettingsUser";
import userImg from "../assets/images/avatar-icon.png";
import "./UserInfo.scss";
import SettingsUser from "../pages/SettingsUser";

const UserInfo = () => {
  const [showBookings, setShowBookings] = useState(true);

  const handleShowBooking = () => {
    setShowBookings(true);
    console.log(showBookings);
  };

  const handleShowSettings = () => {
    setShowBookings(false);
    console.log(showBookings);
  };

  return (
    <div className="container-ui">
      <div className="left-ui">
        <figure className="user-image">
          <img className="img" src={userImg} alt="" />
          <div className="name-ui">Nehal</div>
          <div className="details-ui">
            nehalmarwadi@gmail.com <br />
            Blood Type: o-
          </div>
        </figure>
        <div className="button-div">
          <button type="button" className="btn btn-dark logoutbutton">
            Logout
          </button>
          <button type="button" className="btn btn-danger ">
            Delete Account
          </button>
        </div>
      </div>
      <div className="right-ui">
        <div className="right-uppppp">
          <button
            type="button"
            className="btn btn-outline-primary bookingbutton"
            onClick={handleShowBooking}
          >
            My Booking
          </button>
          <button
            type="button"
            className="btn btn-outline-primary bookingbutton"
            onClick={handleShowSettings}
          >
            Settings
          </button>
        </div>
        <div className="right-down">
          {showBookings && <MyBooking />}
          {!showBookings && <SettingsUser />}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
