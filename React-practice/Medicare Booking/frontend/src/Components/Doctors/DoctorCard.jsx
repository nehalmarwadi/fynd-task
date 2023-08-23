/* eslint-disable react/prop-types */
import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import '../../Components/Doctors/DoctorCard.scss'

const DoctorCard = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialization,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <>
      <div className="photop">
        <img src={photo} className="photo" alt="" />
        <h2 className="heading-dc ">{name}</h2>

        <div className="dc-div ">
          <span className="special">{specialization}</span>

          <div className=" star">
            <span className=" star-icon">
              <img src={starIcon} className="" alt="" /> {avgRating}
            </span>
            <span className=" rating">({totalRating})</span>
          </div>
        </div>

        <div className="total">
          <div>
            <h3 className="total-patients ">+{totalPatients}patients</h3>
            <p className="hospital ">At{hospital}</p>
          </div>
          <Link to="/Doctors" className="same">
            <BsArrowRight className="arrow" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
