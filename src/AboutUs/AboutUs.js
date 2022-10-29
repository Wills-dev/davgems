import React from "react";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import "./AboutUs.css";
import "../Home/Home.css";
import background from "../assets/images/IMG_1536.jpg";

const AboutUs = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-body">
        <div className="title-ctn">
          <h2 className="first-title">GEMSTONE EXPERTS</h2>
          <h1 className="second-title">
            Welcome to the fascinating world of precious stones
          </h1>
        </div>
        <div className="about-us-ctn">
          <div className="about-us">
            <div className="about-us-img-ctn">
              <img src={background} alt="ceo" />
            </div>
            <div className="about-us-paragraph">
              <p>
                I have been involved in the Gemstone industry for thirty five
                years. After spending ten years mining for opal in Lightning
                Ridge Australia, I returned to the UK in 1995, where I founded
                my company in Hatton Garden London where I continued working
                with opal and precious gemstones, whilst maintaining close
                working relationships and contact with my mining friends in
                Australia and also Sri Lanka.
              </p>
              <p>
                Since then, the London based company has become well established
                and respected in the industry and specialises in sourcing fine
                precious coloured gemstones and diamonds from around the globe.{" "}
              </p>
              <p>
                The company supplies and works closely with some of the world's
                largest jewellery houses but over the years we have also been
                fortunate enough to develop many great working relationships and
                friendships with smaller high street retailers and independent
                designers primarily in Europe, Asia and USA where we strive to
                give everybody the same level of excellent service.{" "}
              </p>
              <p>
                Being well established in the gemstone industry for over 30
                years has enabled us to be part of an extensive network of
                trusted professionals worldwide where we attend many global
                trade shows every year to source and trade fine gemstones.
              </p>
              <p>
                I have been a board member of the International Coloured
                Gemstone Association (ICA), representing the UK since 2010 and
                am one of three European Directors.
              </p>
              <p>
                The ICA is a non-profit organisation and the only worldwide
                organisation established to exclusively benefit the global
                coloured gemstone industry. Comprised of nearly 700 industry
                leaders from 47 countries ranging from miners, cutters,
                suppliers, retailers, trade associations, gemological
                laboratories, academia, museums, and more, promoting the
                knowledge and appreciation of coloured gemstones.
              </p>
              <p>
                As an ICA director I have been actively involved in working
                towards the ethical sourcing of gemstones where we aim to
                develop a common and consistent language for promotion and
                ethical business standards necessary to improve international
                communication in the trade of coloured gemstones.
              </p>
              <p>
                I have been an ICA director since 2010 and I was appointed
                treasurer of the ICA in 2018.
              </p>
              <p className="ceo-name">
                Duncan McLauchlan <br /> Owner and CEO McLauchlan Gems Ltd
              </p>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">
            MINING FOR OPAL IN LIGHTING, AUSTRALIA
          </h2>
          <h1 className="second-title">
            Where our passion for opal and <br />
            gemstones began...
          </h1>
        </div>
        <div className="img-history-ctn">
          <div className="img-history-wrapper"></div>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default AboutUs;
