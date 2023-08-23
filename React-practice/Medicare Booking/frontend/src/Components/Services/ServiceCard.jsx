import React from "react";
import "../Services/ServiceCard.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;
  return (
    <div className="service-card">
      {/* py-[30px] px-3 lg:px-5 */}
      <h2 className="heading-serviceCard ">
        {name}
        {/* text-[26px] leading-9 text-headingColor font-[700] */}
      </h2>
      <p className="para-serviceCard  ">
        {desc}
        {/* text-[16px] leading-7 font-[400] text-textColor mt-4  */}
      </p>

      <div className="div-serviceCard ">
        {/* flex items-center justify-between mt-[30px] */}
        <Link to="/Doctors" className="same">
          <BsArrowRight className="arrow" />
        </Link>

        <span
          className="span-serviceCard"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {/* w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600] */}
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
