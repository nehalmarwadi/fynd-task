import "../Footer/Footer.scss";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
const socialLinks = [
  {
    path: "https://www.youtube.com/c/CodingWithMuhib",
    icon: <AiFillYoutube className="social-icons " />,
  },
  {
    path: "https://github.com/codingwithmuhib",
    icon: <AiFillGithub className=" social-icons " />,
  },
  {
    path: "https://www.instagram.com/muhib160.official/",
    icon: <AiOutlineInstagram className="social-icons " />,
  },
  {
    path: "https://www.linkedin.com/in/codingwithmuhib/",
    icon: <RiLinkedinFill className="social-icons " />,
  },
];

const quickLinks01 = [
  { path: "/home", display: "Home" },
  { path: "/", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/", display: "Blog" },
];

const quickLinks02 = [
  { path: "/find-a-doctor", display: "Find a Doctor" },
  { path: "/", display: "Request an Appointment" },
  { path: "/", display: "Find a Location" },
  { path: "/", display: "Get a Opinion" },
];

const quickLinks03 = [
  { path: "/", display: "Donate" },
  { path: "/contact", display: "Contact Us" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-custom  ">
      <div className="container">
        <div className="div-footer ">
          <div>
            <img src={logo} alt="" />
            <p className=" para-footer">
              Copyright © {year} developed by Nehal Marwadi all right reserved.
            </p>
            <div className="saare-logos">
              {socialLinks.map((link, index) => {
                return (
                  <Link to={link.path} key={index} className="style-footer ">
                    {link.icon}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="quick-links">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => {
                return (
                  <li key={index} className="path">
                    <Link to={item.path} className="style-path"
                    >{item.display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="quick-links">
             I want to :
            </h2>
            <ul>
              {quickLinks02.map((item, index) => {
                return (
                  <li key={index} className="path">
                    <Link to={item.path} className="style-path"
                    >{item.display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h2 className="quick-links">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => {
                return (
                  <li key={index} className="path">
                    <Link to={item.path} className="style-path"
                    >{item.display}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
