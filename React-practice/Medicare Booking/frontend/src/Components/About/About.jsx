import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import "../About/About.scss";
import { Link } from "react-router-dom";
 
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          {/* flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row */}
          <div className="imageA ">
            {/* relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 */}
            <img src={aboutImg} alt="" />
            <div className="cardImg">
              {/* absolute z-20 bottom-4w-[200px] md:w-[300px] right-[30%] md:right-[-7%] */}
              {/* lg:right-[22%]  */}

              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          <div className="wrap">
            {/* w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 */}
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text_para">
              For 30 years in a row , U.S. News & world Report has recognized us
              as one pf the best publics hospitals in the Nation and #1 in
              Texas. Lorem ipsum, dolor sit amet consectetur adipisicing Lorem,
              ipsum dolor..
            </p>
            <p className="text_para" style={{ marginTop: "30px" }}>
              Our best is something we strive for each day, Caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing the best. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Id, deleniti!
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default About;
