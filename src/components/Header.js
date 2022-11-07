import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/wills__4_-removebg-preview.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-ctn">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-ctn">
        <div className="link">
          <Link to="/">Home</Link>
        </div>{" "}
        |
        <div className="link">
          <Link to="/about-us">About us</Link>
        </div>
        |{" "}
        <div className="link">
          <Link to="/what-we-do">What we do</Link>
        </div>
        |{" "}
        <div className="link">
          <Link to="/gemstones">Gemstones</Link>
        </div>
        |{" "}
        <div className="link">
          <Link to="/jewelries">Jewelry</Link>
        </div>
        |
        <div className="link">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
