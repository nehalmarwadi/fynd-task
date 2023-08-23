// import React from "react";
import { doctors } from "../../assets/data/doctors";
import "./../Doctors/DoctorList.scss";
import DoctorCard from "./DoctorCard";

const DoctorList = () => {
  return (
    <div className="doctor-list">
      {doctors.map((doctor) => {
        return <DoctorCard key={doctor.id} doctor={doctor} />
      })}
    </div>
  );
};

export default DoctorList;
