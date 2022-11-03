import React from "react";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import "../Home/Home.css";
import background from "../assets/images/IMG_1536.jpg";
import NavBar from "../components/NavBar";

const AboutUs = () => {
  return (
    <div className="main">
      <Header />
      <NavBar />
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
                Ridge Australia, I returned to the US in 1995, where I founded
                my company in Winscott Rd, Benbrook where I continued working
                with opal and precious gemstones, whilst maintaining close
                working relationships and contact with my mining friends in
                Australia and also Sri Lanka.
              </p>
              <p>
                Since then, the Benbrook based company has become well
                established and respected in the industry and specialises in
                sourcing fine precious coloured gemstones and diamonds from
                around the globe.{" "}
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
                Gemstone Association (ICA), representing the US since 2010.
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
                Martin Webb <br /> Owner and CEO Webb's Gem Ltd
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
          <div className="img-history-wrapper">
            <div className="history-img-ctn">
              <div className="history-img history-img-one-one">
                <p>Lighting Ridge</p>
              </div>
              <div className="history-img history-img-one-two">
                <p></p>
              </div>
              <div className="history-img history-img-one-three">
                <p></p>
              </div>
              <div className="history-img history-img-one-four">
                <p></p>
              </div>
            </div>
            <div className="history-img-ctn">
              <div className="history-img history-img-two-one"></div>
              <div className="history-img history-img-two-two">
                <p>Underground</p>
              </div>
              <div className="history-img history-img-two-three">
                <p></p>
              </div>
              <div className="history-img history-img-two-four">
                <p>A day in the office</p>
              </div>
            </div>
            <div className="history-img-ctn">
              <div className="history-img history-img-three-one">
                <p>Hard day's works</p>
              </div>
              <div className="history-img history-img-three-two">
                <p>Facing Opal</p>
              </div>
              <div className="history-img history-img-three-three">
                <p>Cutting</p>
              </div>
              <div className="history-img history-img-three-four"></div>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">OPAL EXPERTS</h2>
          <h1 className="second-title">
            We specialise in Australian fine opal
          </h1>
        </div>
        <div className="about-precious-gem-ctn">
          <div className="about-precious-gem-wrapper">
            <div className="precious-gem-wrapper">
              <div className="precious-gem-wrapper-one">
                <div className="precious-gem gallery-one"></div>
                <div className="precious-gem gallery-two"></div>
                <div className="precious-gem gallery-three"></div>
                <div className="precious-gem gallery-four"></div>
              </div>
              <div className="precious-gem-wrapper-one">
                <div className="precious-gem gallery-five"></div>
                <div className="precious-gem gallery-six"></div>
                <div className="precious-gem gallery-seven"></div>
                <div className="precious-gem gallery-eight"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">COLOURED GEMSTONES</h2>
          <h1 className="second-title">
            We love colour and specialise in a<br /> great variety of precious
            gems
          </h1>
        </div>
        <div className="coloured-gem-ctn">
          <div className="coloured-gem-wrapper">
            <div className="coloured-gem ">
              <div className="gem-color coloured-one"></div>
            </div>
            <div className="coloured-gem ">
              <div className="gem-color coloured-two"></div>
            </div>
          </div>
        </div>
        <div className="about-uss-ctn">
          <Link to="/gemstones">
            <div className="about-uss">Gemstones</div>
          </Link>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default AboutUs;
