import React from "react";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PhoneNumber from "../components/PhoneNumber";

const Contact = () => {
  return (
    <div className="main">
      <Header />
      <PhoneNumber />
      <NavBar />
      <div className="main-body">
        <ContactCom />
      </div>
    </div>
  );
};

export default Contact;
