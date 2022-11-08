import React from "react";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import PhoneNumber from "../components/PhoneNumber";
import "./GemStones.css";

const GemStones = () => {
  return (
    <div className="main">
      <Header />
      <PhoneNumber />
      <NavBar />
      <div className="main-body">
        <div className="title-ctn">
          <h2 className="first-title">COLOURED GEMSTONES</h2>
          <h1 className="second-title">
            Explore the world of fine precious stones. Sapphires, emeralds,
            rubies, opals, fancy coloured diamonds...
          </h1>
        </div>
        <div className="explore-gem-ctn">
          <div className="explore-gem-wrapper">
            <div className="explore-gem explore-one">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Ruby</p>
                </div>
              </div>
            </div>
            <div className="explore-gem explore-two">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Emerald</p>
                </div>
              </div>
            </div>
            <div className="explore-gem explore-three">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Sapphire</p>
                </div>
              </div>
            </div>
            <div className="explore-gem explore-four">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Opal</p>
                </div>
              </div>
            </div>
            <div className="explore-gem explore-five">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Pink Diamond</p>
                </div>
              </div>
            </div>
            <div className="explore-gem explore-six">
              <div className="explore-img-ctn">
                <div className="explore-content">
                  <p>Coloured Gems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">EXPERT GEMSTONE DEALERS</h2>
          <h1 className="second-title">
            Sourcing quality coloured gemstones at the best possible prices is
            one of our strengths
          </h1>
        </div>
        <div className="our-service-ctn">
          <div className="our-service-wrapper">
            <div className="our-service-ctn-one">
              <div className="our-service-one">
                <p className="our-service-paragraph">
                  Our aim is to work closely with our clients, identify their
                  needs and help them achieve their goals in the most effective
                  way. This means that sometimes quite a few parameters need to
                  be met, such as, sourcing a specific colour, shape, quantities
                  and target price range.
                </p>
              </div>
              <div className="our-service-one">
                <p className="our-service-paragraph">
                  Other times we may need to source gemstones cut in a
                  particular shape to suit a chosen design or match the colour
                  of a particular gemstone in large quantities which sometimes
                  can be a challenging task as nature doesn't work like this.
                </p>
              </div>
            </div>
            <div className="our-service-ctn-two">
              <div className="our-service-one">
                <p className="our-service-paragraph">
                  Our long experience in the gemstone industry and our worldwide
                  network allow us to fulfil even the most challenging demands.
                  We always go the extra mile to find solutions for our clients
                  and strive to offer the same excellent service to everyone.
                </p>
              </div>
              <div className="our-service-one">
                <p className="our-service-paragraph">
                  Visiting important international gemstone exhibitions around
                  the world and mines every year is important to us. This
                  enables us to achieve the best possible prices therefore
                  making us very competitive within our industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h1 className="second-title">
            making us very competitive within our industry. We are able to
            source gemstones according to our client’s specifications, such as
            colour, shape, quantity and price range.
          </h1>
        </div>
        <div className="blue-pearl-img-ctn">
          <div className="blue-pearl-img-one"></div>
          <div className="blue-pearl-img-two"></div>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default GemStones;
