import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import "./Home.scss";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../Components/About/About";
import ServiceList from "../Components/Services/ServiceList";
import videoIcon from "../assets/images/video-icon.png";
import DoctorList from "../Components/Doctors/DoctorList";
import FaqList from "../Components/Faq/FaqList";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section">
        <div className="container">
          <div className="custom-container">
            <div style={{ display: "flex" }}>
              <div className="division">
                <h1 className="heading-1">
                  We help patients <br />
                  live a healthy, <br /> longer life.
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  distinctio facere eligendi quam sapiente! Vero est labore
                  <br />
                  quasi tempore architecto doloremque quam accusantium
                  <br />
                  praesentium unde, minima laboriosam, perspiciatis placeat!
                  <br />
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              <div className="big-box">
                <div>
                  <img className="bigImg" src={heroImg01} alt="" />
                </div>
                <div className="smallImgs">
                  <img src={heroImg02} alt="" className="smallImg1"></img>
                  <img src={heroImg03} alt="" className="smallImg2" />
                </div>
              </div>
            </div>
          </div>

          {/* herocounter */}
          <div className="hero-counter">
            <div>
              <h2 className="headings">30+</h2>
              <span className="span-a"></span>
              <p className="text_para">Years of Experience</p>
            </div>

            <div>
              <h2 className="headings">15+</h2>
              <span className="span-b"></span>
              <p className="text_para">Clinic Location</p>
            </div>

            <div>
              <h2 className="headings">100%</h2>
              <span className="span-c"></span>
              <p className="text_para">Patient Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="boxes">
            <h2 className="heading">Providing the best medical services</h2>
            <p className="text-para">
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="box-1">
            <div className="empty-box">
              <div className="icon">
                <img src={icon01} alt=""></img>
              </div>
              <div className="icons">
                <h2 className="heads">Find a Doctor</h2>
                <p className="para ">
                  World-class care for everyone. Our health system <br /> offers
                  unmatched, expert health care. From the lab to <br /> the
                  clinic.
                </p>
                <Link to="/Doctors" className="same">
                  <BsArrowRight className="arrow" />
                </Link>
              </div>
            </div>

            <div className="empty-box">
              <div className="icon">
                <img src={icon02} alt=""></img>
              </div>
              <div className="icons">
                <h2 className="heads">Find a Location</h2>
                <p className="para">
                  World-class care for everyone. Our health system <br /> offers
                  unmatched, expert health care. From the lab to <br /> the
                  clinic.
                </p>
                <Link to="/Doctors" className="same">
                  <BsArrowRight className="arrow" />
                </Link>
              </div>
            </div>
            <div className="empty-box">
              <div className="icon">
                <img src={icon03} alt=""></img>
              </div>
              <div className="icons">
                <h2 className="heads">Booking Appointment</h2>
                <p className="para">
                  World-class care for everyone. Our health system <br /> offers
                  unmatched, expert health care. From the lab to <br /> the
                  clinic.
                </p>
                <Link to="/Doctors" className="same">
                  <BsArrowRight className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* serviceSection */}

      <section>
        <div className="container">
          <div className="service xl:w-[470px] mx-auto">
            <h2 className="heading" style={{ textAlign: "center" }}>
              Our medical services
            </h2>
            <p className="text_para" style={{ textAlign: "center" }}>
              World-class care for everyone. Our health system offers <br />
              unmatched, expert health care
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* featureSection */}
      <section>
        <div className="container">
          <div className="feature-div ">
            {/* flex items-center justify-between flex-col lg:flex-row */}
            <div className="content ">
              {/* xl:w-[670px] */}
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="ul-feature">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text_para">
                  3. View our physician who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* featureImg */}

            <div className="image-feature">
              {/* relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 */}
              <img src={featureImg} className="img-feature" alt=""></img>

              <div className="feature-end">
                {/* w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] */}
                <div className="end1">
                  <div className="end2">
                    <p className="para-feature ">Tue, 24</p>
                    <p className="para-feature ">10:00AM</p>
                  </div>
                  <span className="span2 ">
                    {/* w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] */}
                    <img src={videoIcon} alt=""></img>
                  </span>
                </div>

                <div className="consult ">
                  {/* w-[65px] lg:w-[96px] bg=[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 */}
                  Consultation
                </div>

                <div className="feature-box flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18]">
                  <img src={avatarIcon} alt=""></img>
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* great Doctors */}

      <section>
        <div className="container">
          <div className="service">
            <h2 className="heading" style={{ textAlign: "center" }}>
              Our great doctors
            </h2>
            <p className="text_para" style={{ textAlign: "center" }}>
              World-class care for everyone. Our health system offers <br />
              unmatched, expert health care
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* faqSection */}
      <section>
        <div className="container">
          <div className="faq-box">
            <div className=" faq-image">
              <img src={faqImg} alt="" />
            </div>

            <div className="faq-section">
              <h2 className="heading-faq">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* //testimonial */}
      <section>
        <div className="container">
          <div className="service">
            <h2 className="heading" style={{ textAlign: "center" }}>
              What our patients say
            </h2>
            <p className="text_para" style={{ textAlign: "center" }}>
              World-class care for everyone. Our health system offers <br />
              unmatched, expert health care
            </p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  );
};

export default Home;
