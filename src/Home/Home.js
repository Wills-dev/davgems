import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import banner from "../assets/images/istockphoto-3.jpg";
import banner1 from "../assets/images/istockphoto-5.jpg";
import banner2 from "../assets/images/istockphoto-9.jpg";
import banner3 from "../assets/images/istockphoto-21.jpg";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="main-body">
        <div className="title-ctn">
          <h2 className="first-title">FINE QUALITY GEMSTONE TRADERS</h2>
          <h1 className="second-title">
            Sharing our passion for fine and rare gemstones
          </h1>
        </div>

        <div className="main-image-ctn">
          <div className="slide-container">
            <Fade>
              <div className="each-slide">
                <img src={banner} alt="banner" />
              </div>
              <div className="each-slide">
                <img src={banner1} alt="banner" />
              </div>
              <div className="each-slide">
                <img src={banner2} alt="banner" />
              </div>
              <div className="each-slide">
                <img src={banner3} alt="banner" />
              </div>
            </Fade>
          </div>
        </div>
        <div className="about-us-ctn">
          <Link to="/about-us">
            <div className="about-us">About us...</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">OUR JOURNEY IN THE WORLD OF GEMS</h2>
          <h1 className="second-title">
            Began in the opal mining fields three decades ago...
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div className="journey-ima-ctn">
              <img src={banner3} alt="banner" />
            </div>
            <div className="journey-paragraph-ctn">
              <h4 className="journey-country">Opal Mining - Australia</h4>
              <p className="journey-paragraph">
                Our story began in the opal mining fields of Lighting Ridge
                Australia thirty five years ago.
              </p>
              <p className="journey-paragraph">
                This initial exposure in the world of gems lead to a life long
                passion for fine coloured gemstones and a career in the
                fascinating world of coloured gemstones.
              </p>
              <p className="journey-paragraph">
                Today we have established ourselves in Hatton Garden the heart
                of the jewellery district in London, where we source and supply
                fine coloured gemstones to some of the world's most famous
                jewellery designers and jewellery houses.
              </p>
            </div>
          </div>
          <div className="journey">
            <div className="journey-paragraph-ctn">
              <h4 className="journey-country">Gemstone Traders - London</h4>
              <p className="journey-paragraph">
                We are involved in all aspects of the process of jewellery
                making.
              </p>
              <p className="journey-paragraph">
                From sourcing rough gems, cutting and polishing them to
                designing bespoke one-of-a-kind pieces of jewellery for our
                private clients.
              </p>
              <p className="journey-paragraph">
                We are passionate about our industry and are involved in the
                ethical sourcing of gemstones and play an active role in the
                efforts of the International Coloured Gemstone Association (ICA)
              </p>
            </div>
            <div className="journey-ima-ctn">
              <img src={banner3} alt="banner" />
            </div>
          </div>
        </div>
        <div className="about-us-ctn">
          <Link to="/about-us">
            <div className="about-us">Find out more...</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">MCLAUCHLAN GEMSTONE TRADERS</h2>
          <h1 className="second-title">
            Based in Hatton Garden the heart of London's Jewellery district
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div className="journey-ima-ctn">
              <img src={banner3} alt="banner" />
            </div>
            <div className="journey-paragraph-ctn">
              <h4 className="journey-country">Gemstone Dealers and Experts</h4>
              <p className="journey-paragraph">
                Based in Hatton Garden the heart of London's Jewellery district,
                McLauchlan Gems Ltd specialises and deals in fine quality
                coloured gemstones.
              </p>
              <p className="journey-paragraph">
                A personal passion and life long interest for sourcing and
                supplying unusual and rare gemstones for our clients, means that
                we are constantly on the hunt for fine exceptional gemstones.
              </p>
              <h4 className="journey-country">
                Gemstones Direct from the Source
              </h4>
              <p className="journey-paragraph">
                Visiting important international gemstone exhibitions around the
                world and mines every year is important to us. Sourcing
                gemstones of exceptional quality at the best possible price is
                one of our strengths.
              </p>
            </div>
          </div>
          <div className="journey">
            <div className="journey-paragraph-ctn">
              <h4 className="journey-country">
                Gemstones of Exceptional Quality
              </h4>
              <p className="journey-paragraph">
                The gemstones we deal in are of the highest quality and
                standards. Whether it is an amethyst or a ruby, one thing is
                certain that they will both be of great quality.The gemstones we
                deal in are of the highest quality and standards. Whether it is
                an amethyst or a ruby, one thing is certain that they will both
                be of great quality.
              </p>
              <p className="journey-paragraph">
                We work with a wide variety of fine coloured gemstones and are
                able to source gemstones according to our client's
                specifications, such as, colour, shape and price range.
              </p>
              <h4 className="journey-country">
                Commitment to Ethical Practices
              </h4>
              <p className="journey-paragraph">
                We have a commitment to fair trade and ethical practices where
                we are actively involved through the International Coloured
                Gemstone Association (ICA).
              </p>
              <p className="journey-paragraph">
                Chosen to be one of the European Directors of the ICA enables us
                to support these practices.
              </p>
            </div>
            <div className="journey-ima-ctn">
              <img src={banner3} alt="banner" />
            </div>
          </div>
        </div>
        <div className="certification">
          Our gemstones have certificates from the most reputable <br /> gem
          laboratories in the world such as
          <br />
          Gubelin, SSCF, GRS, GIA
        </div>
      </div>
    </div>
  );
};

export default Home;
