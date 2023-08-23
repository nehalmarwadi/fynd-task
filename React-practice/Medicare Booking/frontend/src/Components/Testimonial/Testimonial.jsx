import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import "../../Components/Testimonial/Testimonial.scss";

const Testimonial = () => {
  return ( 
    <>
      <div className="testimonial-div ">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="custom-testi">
              <div className="image-testi">
                <img src={patientAvatar} alt="" />
                <div>
                  <h4 className="heading-testi">Steve Jobs</h4>
                  <div className="div-testi ">
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                  </div>
                </div>
              </div>

              <p className="para-testi">
                I have taken medical services from them. They treat so well and
                they are providing the best best medical services."👍
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom-testi">
              <div className="image-testi">
                <img src={patientAvatar} alt="" />
                <div>
                  <h4 className="heading-testi">Steve Jobs</h4>
                  <div className="div-testi">
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                  </div>
                </div>
              </div>

              <p className="para-testi">
                I have taken medical services from them. They treat so well and
                they are providing the best best medical services."👍
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom-testi">
              <div className="image-testi">
                <img src={patientAvatar} alt="" />
                <div>
                  <h4 className="heading-testi">Steve Jobs</h4>
                  <div className="div-testi">
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                  </div>
                </div>
              </div>

              <p className="para-testi ">
                I have taken medical services from them. They treat so well and
                they are providing the best best medical services." 👍
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="custom-testi">
              <div className="image-testi">
                <img src={patientAvatar} alt="" />
                <div>
                  <h4 className="heading-testi">Steve Jobs</h4>
                  <div className="div-testi">
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                    <HiStar className="five-star " />
                  </div>
                </div>
              </div>

              <p className="para-testi">
                I have taken medical services from them. They treat so well and
                they are providing the best best medical services.👍
              </p>
            </div>
          </SwiperSlide>

        

        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
