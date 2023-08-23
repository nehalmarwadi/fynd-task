import React from "react";
import DoctorCard from "./../../Components/Doctors/DoctorCard";
import Testimonial from "../../Components/Testimonial/Testimonial";
import { doctors } from "../../assets/data/doctors";
import "../Doctors/Doctors.scss"


const Doctors = () => {
  return (
    <>
      <section className="section-doc ">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="div-doc">
            <input
              type="search"
              className="input-do"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md">
              Search
            </button>
          </div>
        </div> 
      </section>
      <section>
        <div className="container">
          <div className="custom-doc">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="custom-container ">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
