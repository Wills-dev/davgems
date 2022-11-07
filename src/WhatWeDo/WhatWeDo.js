import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import "./WhatWeDo.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main">
      <Header />
      <NavBar />
      <div className="main-body">
        <div className="title-ctn">
          <h2 className="first-title">FINE AND RARE GEMSTONES</h2>
          <h1 className="second-title">
            35 years of experience in the gemstone industry
          </h1>
        </div>
        <div className="what-we-can-ctn">
          <div className="what-we-can">
            <div className="what-we-can-paragraph">
              <p>
                A keen interest and ability for supplying or sourcing fine and
                rare gemstones means that we are constantly on the hunt for our
                clients. After 35 years in the gemstone industry we are able to
                achieve this by going directly to source using our established
                worldwide network of trusted suppliers, gemstone cutters and
                miners.
              </p>
              <p>
                We try to visit at least four of the major international
                gemstone exhibitions held around the world every year, where we
                are always excited to meet with suppliers and new contacts,
                allowing us to keep up with the latest trends and developments
                within our industry and importantly keep up with our obligations
                and duties as a long term board member of the International
                Coloured Gemstone Association (ICA).
              </p>
              <p>
                We deal in gemstones of the highest quality. There are certain
                parameters we are looking for when sourcing our gemstones such
                as colour, purity and lustre, cut, origin, treatments or
                enchancements to name but a few.
              </p>
              <p>
                We enjoy working with a wide variety of fine coloured gemstones
                such as ruby, sapphire, emerald, opal, aquamarine, tsavorite,
                tourmaline, rubellite, fine moonstone, pink and fancy coloured
                diamonds and we are able to supply or source gemstones according
                to our client’s exact specifications.
              </p>
              <p className="our-quote">
                "Being passionate about all fine coloured and rare gemstones and
                our industry has fortunately enabled us to share some of this
                passion and enthusiasm with our clients and bring a little more
                colour to the world."
              </p>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">GEM TRADERS AND EXPERTS</h2>
          <h1 className="second-title">
            Offering our excellent services to the gem and jewelry industry
          </h1>
        </div>
        <div className="blue-gem-img-ctn">
          <div className="blue-gem-img-one"></div>
          <div className="blue-gem-img-two"></div>
        </div>
        <div className="title-ctn">
          <h1 className="second-title">
            We always go the extra mile to find solutions for our clients and
            strive to offer the same excellent service to everyone.
          </h1>
        </div>
        <div className="title-ctnn">
          <h2
            className="fourth-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="300"
          >
            - Our Services -
          </h2>
        </div>
        <div className="our-service-ctn">
          <div className="our-service-wrapper">
            <div className="our-service-ctn-one">
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Fine Gemstones
                </h3>
                <p className="our-service-paragraph">
                  We specialise in a wide variety of fine coloured gemstones and
                  fancy coloured diamonds. ﻿Our gemstones have certificates from
                  the most reputable gemological laboratories in the world such
                  as Gubelin, SSEF, GRS, GIA.
                </p>
                <hr />
                <hr />
              </div>
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Gemstone sourcing
                </h3>
                <p className="our-service-paragraph">
                  Sourcing gemstones directly, according to our client’s
                  specifications, such as, colour, shape, quantity, and price
                  range.
                </p>
                <hr />
                <hr />
              </div>
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Opal experts and cutters
                </h3>
                <p className="our-service-paragraph">
                  We are considered one of the main opal experts and cutters in
                  the USA. We hold in our stock a wide selection of beautiful
                  black, crystal and boulder opal.
                </p>
                <hr />
                <hr />
              </div>
            </div>
            <div className="our-service-ctn-two">
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Bespoke jewelry design
                </h3>
                <p className="our-service-paragraph">
                  We design and manufacture bespoke jewelry for our private
                  clients. From engagement rings to one-of-a-kind bespoke pieces
                  of jewelry. We also remodel old pieces of jewelry for those
                  customers who wish to alter, redesign or repair a piece.
                </p>
                <hr />
                <hr />
              </div>
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Antique jewelry
                </h3>
                <p className="our-service-paragraph">
                  We buy and sell antique jewelry because we love the charm,
                  character and history that these pieces of jewelry have.
                </p>
                <hr />
                <hr />
              </div>
              <div className="our-service-one">
                <h3
                  className="our-service-heading"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-offset="300"
                >
                  Expert valuations
                </h3>
                <p className="our-service-paragraph">
                  We offer independent expert valuations on gemstones and
                  jewelry. All of the jewelry that we manufacture comes with a
                  valuation.
                </p>
                <hr />
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="300"
        >
          <h1 className="second-title">
            We believe in the ethical practices within the gemstone industry and
            the long lasting relationships with our clients and suppliers.
          </h1>
        </div>
        <div className="ica-ctn">
          <div className="ica-wrapper">
            {" "}
            <div className="ica-paragraph-ctn">
              <p>
                We have a commitment to fair trade and ethical practices where
                we are actively involved through the International Coloured
                Gemstone Association (ICA).
              </p>
              <p>
                Chosen to be one of the European Directors of the ICA enables us
                to support these practices.
              </p>
            </div>
            <div className="about-uss-ctn ">
              <Link to="https://www.gemstone.org/">
                <div className="about-uss" style={{ background: "#fff" }}>
                  Find out more about the ICA...
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">'ONE OF A KIND' JEWELRY</h2>
          <h1 className="second-title">
            Design your own unique piece of jewelry
          </h1>
        </div>
        <div className="one-kind-ctn">
          <div className="one-kind">
            <div className="one-kind-paragraph">
              <p>
                Our many years of expertise in the jewelry industry enabled us
                to develop our very own private clients many of which are now
                our friends that have wished to manufacture bespoke jewelry.
              </p>
              <p>
                Our approach to designing jewelry is to firstly identify and
                listen carefully to the client’s requirements and what they are
                aiming to achieve. We will provide them with options that suit
                their budget and taste, design and manufacture their chosen
                piece by using some of the best jewelry manufacturers in the
                USA.
              </p>
              <p>
                Designing a bespoke piece of jewelry, whether it is an
                engagement ring, an anniversary gift or any other occasion is a
                really unique experience and process to go through, as it allows
                clients to get involved and add a touch of personalisation.
              </p>
              <p>
                We really care about the end client and we believe that the
                piece of jewelry designed and manufactured should enhance the
                wearers’ experience and satisfaction.
              </p>
              <p className="our-quote">
                We support the 'one of a kind' approach that is more involved
                and meaningful.
              </p>
            </div>
          </div>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default WhatWeDo;
