import React from "react";
import { Link } from "react-router-dom";
import "./ContactCom.css";

import partnerOne from "../assets/images/international.webp";
import partnerTwo from "../assets/images/accredited.webp";
import logo from "../assets/images/wills__4_-removebg-preview.png";

const ContactCom = () => {
  return (
    <div className="contact">
      <div className="title-ctn">
        <h2 className="first-title">Contact us</h2>
        <h1 className="third-title">
          We will be happy to assist you with any enquiries you may have.
        </h1>
      </div>
      <div className="form-ctn">
        <form>
          <div className="form-wrapper">
            <div className="form-first-row">
              <div className="first-row first-column">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="first-row second-column">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="first-row third-column">
                <label htmlFor="number">Phone No</label>
                <input type="text" id="name" required />
              </div>
            </div>
            <div className="form-second-row">
              <label htmlFor="message">Message</label>
              <textarea id="message" required cols="20" rows="8"></textarea>
            </div>
            <p className="privacy-policy">
              By submitting this form I concent to your{" "}
              <Link to="/">privacy policy.</Link>
            </p>
          </div>
          <div className="form-btn">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
      <div className="partners">
        <div className="address">
          <div className="logo">
            {" "}
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="main-address">
            <p> Pearl Asset Gems Ltd</p>
            <p>501 Winscott Rd, Benbrook Tx 76126. </p>
            <p>266 Stebbings Ct, Bradley, IL 60915</p>
            <p>2370 Quinland Lake Rd, Cookeville, TN 38301. </p>
            <p>Tel +1 423-603-2719</p>
            <p>Tel +1 (817) 546-0043</p>
            <p style={{ color: "red" }}>
              <i class="far fa-clock"></i> Work hours: Mon-Sat 8:00-18:00
            </p>
          </div>
        </div>
        <div className="main-partners">
          <div className="main-partners-one">
            <img src={partnerOne} alt="partners" />
          </div>
          <div className="partners-name">
            <p>European Director and Treasurer</p>
          </div>
          <div className="main-partners-two">
            <img src={partnerTwo} alt="partners" />
          </div>
        </div>
      </div>

      <div className="social-ctn">
        <div className="social-list">
          <Link to="">
            <i className="fab fa-facebook-f"></i>
          </Link>
        </div>
        <div className="social-list">
          <Link to="">
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="social-list">
          <Link to="">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
      <div className="right-reserved">
        <p>
          © 2022 All Rights Reserved | Pearl Asset Gems Ltd <br />
          Gemstone Traders US
        </p>
      </div>
    </div>
  );
};

export default ContactCom;
