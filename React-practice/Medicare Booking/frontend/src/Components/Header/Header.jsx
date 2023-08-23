import { useEffect, useRef } from "react";
import userImg from "../../assets/images/avatar-icon.png";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import "./header.scss";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
 
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="custom">
          <div>
            <img src={logo} alt=""></img>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "classOne" 
                        : "classTwo" 
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-right">
            <div className="profile-icon">
              <Link to="/">
                <figure className="user-image">
                  <img className="img" src={userImg} alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="btn ">Login</button>
            </Link>

            <span className="hidden" onClick={toggleMenu}>
              <BiMenu className="sideBarLogo"></BiMenu>
           
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
