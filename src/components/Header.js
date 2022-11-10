import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/wills__4_-removebg-preview.png";

import "./Header.css";

const Header = () => {
  return (
    <div className="header-ctn">
      <div className="logo">
        <Link to="/" end>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-ctn">
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/"
            end
          >
            Home
          </NavLink>
        </div>{" "}
        |
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/about-us"
          >
            About us
          </NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/what-we-do"
          >
            What we do
          </NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/gemstones"
          >
            Gemstones
          </NavLink>
        </div>
        |{" "}
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/jewelries"
          >
            Jewelry
          </NavLink>
        </div>
        |
        <div className="link">
          <NavLink
            className={({ isActive }) => {
              return isActive && "active";
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
