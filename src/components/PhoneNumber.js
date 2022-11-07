import React from "react";
// import { Link } from "react-router-dom";
import "./PhoneNumber.css";

const PhoneNumber = () => {
  return (
    <div className="phone-ctn">
      <a href="tel:  +1 (817) 546-0043">
        <i class="fas fa-phone-alt"></i>
      </a>
    </div>
  );
};

export default PhoneNumber;
