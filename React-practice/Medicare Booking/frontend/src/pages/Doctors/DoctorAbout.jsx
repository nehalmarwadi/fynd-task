import React from "react";
import { formateDate } from "../../utils/formateDate";
import "../Doctors/DoctorAbout.scss"

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="heading-DA ">
          About of
          <span className="span-DA">
            Peter Parker
          </span>
        </h3>
        <p className=" text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nihil rem voluptate id tenetur cum eum similique aperiam dicta
          aliquid, architecto provident modi voluptas alias eius, fuga molestias
          labore exercitationem quas maiores non ad magnam. Nesciunt architecto,
          beatae vel maiores libero culpa commodi ipsum?
        </p> 
      </div>

      <div className=" div-DA ">
        <h3 className="h3-DA ">
          Education
        </h3>

        <ul className="ul-DA ">
          <li className="li-DA ">
            <div>
              <span className="DA_SPAN2">
                {formateDate("09-13-2014")}-{formateDate("09-13-2016")}
              </span>
              <p className="p-DA">
                PHD in Surgeon
              </p>
              <p className=" p2-DA ">
                New Apollo Hospital, New York.
              </p>
            </div>
          </li>
          <li className="li-DA">
            <div>
              <span className="DA_SPAN2">
                {formateDate("07-04-2010")}-{formateDate("09-13-2014")}
              </span>
              <p className="p-DA">
                PHD in Surgeon
              </p>
              <p className=" p2-DA ">
                New Apollo Hospital, New York.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="div-DA">
      <h3 className=".h3-DA ">
          Experience
        </h3>
        <ul className="doc-ul ">
            <li className="doc-li ">
                <span className="doc-span">
                {formateDate("07-04-2010")}-{formateDate("09-13-2014")}
                </span>
                <p className=" p-DA">
               Sr. Surgeon
              </p>
              <p className=" p2-DA">
                New Apollo Hospital, New York.
              </p>
            </li>

            <li className="doc-li ">
                <span className="doc-span">
                {formateDate("07-04-2010")}-{formateDate("09-13-2014")}
                </span>
                <p className=" p-DA">
               Sr. Surgeon
              </p>
              <p className=" p2-DA">
                New Apollo Hospital, New York.
              </p>
            </li>

        </ul>
        </div>      
    </div>
  );
};

export default DoctorAbout;
