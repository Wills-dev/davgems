import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);

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
            <Link to="/" class="navigation-item ">
              Home
            </Link>
            <Link to="/about-us" class="navigation-item">
              About us
            </Link>
            <Link to="/what-we-do" class="navigation-item">
              What we do
            </Link>
            <Link to="/gemstones" class="navigation-item">
              GemStone
            </Link>
            <Link to="/jewelries" class="navigation-item">
              Jewellery
            </Link>
            <Link to="/contact" class="navigation-item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
