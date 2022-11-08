import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/wills__4_-removebg-preview.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-ctn">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className="nav-ctn">
        <div className="link">
          <NavLink to="/">Home</NavLink>
        </div>{" "}
        |
        <div className="link">
          <NavLink to="/about-us">About us</NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink to="/what-we-do">What we do</NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink to="/gemstones">Gemstones</NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink to="/jewelries">Jewelry</NavLink>
        </div>
        |
        <div className="link">
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
