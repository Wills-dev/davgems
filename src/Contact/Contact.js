import React from "react";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div className="main">
      <Header />
      <NavBar />
      <div className="main-body">
        <ContactCom />
      </div>
    </div>
  );
};

export default Contact;
