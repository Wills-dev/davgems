import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/wills (1).png";

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
        <Link to="/">Home</Link> |<Link to="about-us">About us</Link> |
        <Link to="what-we-do">What we do</Link> |
        <Link to="gemstones">Gemstones</Link> |
        <Link to="jewelries">Jewellery</Link> |<Link to="contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
