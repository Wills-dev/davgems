import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };
  return (
    <div>
      <div class="nav-bar">
        <div
          className={isActive ? "menu-icon" : "display"}
          onClick={handleClick}
        >
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
        <div className={isActive ? "side-bar" : "activated"}>
          <div class="navigations">
            <div className="navigation-item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
                end
              >
                Home
              </NavLink>
            </div>
            <div className="navigation-item">
              <NavLink
                to="/about-us"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
              >
                About us
              </NavLink>
            </div>
            <div className="navigation-item">
              <NavLink
                to="/what-we-do"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
              >
                What we do
              </NavLink>
            </div>
            <div className="navigation-item">
              <NavLink
                to="/gemstones"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
              >
                GemStone
              </NavLink>
            </div>
            <div className="navigation-item">
              <NavLink
                to="/jewelries"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
              >
                Jewelry
              </NavLink>
            </div>
            <div className="navigation-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive && "aactive";
                }}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
