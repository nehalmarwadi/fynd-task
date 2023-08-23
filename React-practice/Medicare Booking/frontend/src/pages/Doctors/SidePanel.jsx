import React from "react";
import "../Doctors/SidePanel.scss";

const SidePanel = () => {
  return (
    <div className=".container-SP ">
      <div className="custom-sp">
        <p className="text_para">Ticket Price</p>
        <span className="span-sp">500 BDT</span>
      </div>
      <div className="div-sp ">
        <p className="text_para ">Available Time Slots:</p>
        <ul className="ul-sp ">
          <li className="li-sp ">
            <p className="p-sp ">Sunday</p>
            <p className="p-sp ">4:00 PM - 9:30 PM</p>
          </li>
          <li className="li-sp ">
            <p className="p-sp ">Tuesday</p>
            <p className="p-sp">4:00 PM - 9:30 PM</p>
          </li>
          <li className="li-sp ">
            <p className="p-sp ">Wednesday</p>
            <p className="p-sp">4:00 PM - 9:30 PM</p>
          </li>
        </ul>
      </div>
      <button className="btn ">Book Appointment</button>
    </div>
  );
};

export default SidePanel;
