import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactCom from "../components/ContactCom";
import Header from "../components/Header";
import "./Jewelries.css";
import JewelOne from "../assets/images/istockphoto-11.jpg";
import Jeweltwo from "../assets/images/istockphoto-12.jpg";
import JewelThree from "../assets/images/photo-13.avif";
import jewelFour from "../assets/images/photo-3.avif";
import JewelFive from "../assets/images/photo-6.avif";
import JewelSix from "../assets/images/photo-10.avif";
import JewelSeven from "../assets/images/photo-14.avif";
import JewelEight from "../assets/images/istockphoto-15.jpg";
import JewelNine from "../assets/images/istockphoto-16.jpg";
import NavBar from "../components/NavBar";

import AOS from "aos";
import "aos/dist/aos.css";
import PhoneNumber from "../components/PhoneNumber";

const Jewelries = () => {
  const jewel = [
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1573229664268-3ab315835c57-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1499578124509-1611b77778c8-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/blue_sapphire_ring-6b53f210-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1530533718754-001d2668365a-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1610189244462-d74f9c517c5a-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/IMG_2643-ade9502e-d9377648-1920w-640w.JPG",
  ];

  const jewelTwo = [
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/sapphire_ring-07166c11-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1517080809625-47ae8a4c8652-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1616690572498-fd04d405acf4-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/IMG_9586-daffba43-1920w-c64ac9d4-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1543535170-75ef1a497627-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1612636007122-fcc768576249-640w.jpg",
  ];

  const jewelThree = [
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1592436078279-b5971be2d8fc-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1606290753390-92bedf0997fd-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1524725407856-07a1c1aeba43-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/opal_pendant_7316-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/antique_yellow_beryl_earrings-640w.jpg",
  ];

  const JewelFour = [
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1499578124509-1611b77778c8-640w.jpg",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/IMG_0281-layers+-pendant-640w.JPG",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/rainbow_moonstone-680a66b4-768c7045-640w.jpg",
    "https://lirp.cdn-website.com/md/unsplash/dms3rep/multi/opt/photo-1604662941425-9642752c5c14-640w.jpg",
  ];

  const jewelFive = [
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/IMG_6930-f1d74457-68490503-1920w-640w.JPG",
    "https://lirp.cdn-website.com/ef5e8968/dms3rep/multi/opt/IMG_6929-4119ca82-370c28bc-1920w-640w.JPG",
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="main">
      <Header />
      <PhoneNumber />
      <NavBar />
      <div className="main-body">
        <div className="title-ctn">
          <h2 className="first-title">EXCEPTIONAL BESPOKE JEWELRY</h2>
          <h1 className="second-title">
            Meticulously designed and manufactured for you
          </h1>
        </div>
        <div className="jewellery-img-ctn">
          <div className="jewellery-img-wrapper">
            <div className="jewellery-img jewellery-one">
              <img src={JewelOne} alt="" />
            </div>
            <div className="jewellery-img jewellery-two">
              <img src={Jeweltwo} alt="" />
            </div>

            {jewel.map((jewel, index) => (
              <div className="jewellery-img jewellery-two">
                <img src={jewel} index={index} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="title-ctn">
          <p>
            These <span>'one of a kind'</span> pieces of jewelry incorporate
            fine gemstones known for their uniqueness and rareness combined with
            unique bespoke design and excellent US manufacturing.
          </p>
        </div>
        {/* <p className="second-title"></p> */}

        <div className="about-uss-ctn">
          <Link to="/gemstones">
            <div className="about-uss">See More</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h1 className="second-title">
            A unique experience of participating in the creation of a
            personalised piece of jewelry
          </h1>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">Bespoke jewelry</h2>
        </div>
        <div className="jewellery-img-ctn">
          <div className="jewellery-img-wrapper">
            {jewelTwo.map((jewel, index) => (
              <div className="jewellery-img jewellery-two">
                <img src={jewel} index={index} alt="" />
              </div>
            ))}
            <div className="jewellery-img jewellery-one">
              <img src={JewelThree} alt="" />
            </div>
            <div className="jewellery-img jewellery-two">
              <img src={jewelFour} alt="" />
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <p>
            This is a <span>fun process</span> to go through!{" "}
          </p>
          <p>
            {" "}
            Participating in the unique experience of designing your own piece
            of jewelry is extremely rewarding. Play with gemstones and ideas and
            create beautiful, personalised more meaningful pieces of jewelry to
            treasure for life. We truly enjoy guiding you through the process,
            so please feel free to get in touch.
          </p>
        </div>

        <div className="about-uss-ctn">
          <Link to="/gemstones">
            <div className="about-uss">Explore</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">ANTIQUE JEWELRY</h2>
          <h1 className="second-title">
            We love the character and charm of antique jewelry
          </h1>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">Antique and preowned jewelry</h2>
        </div>
        <div className="jewellery-img-ctn">
          <div className="jewellery-img-wrapper">
            {jewelThree.map((jewel, index) => (
              <div className="jewellery-img jewellery-two">
                <img src={jewel} index={index} alt="" />
              </div>
            ))}
            <div className="jewellery-img jewellery-one">
              <img src={JewelFive} alt="" />
            </div>
            <div className="jewellery-img jewellery-two">
              <img src={JewelSix} alt="" />
            </div>
            <div className="jewellery-img jewellery-two">
              <img src={JewelSeven} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="title-ctn">
            <p>
              Browse through some of the <span>antique</span>{" "}
            </p>{" "}
            <p>
              <span>pieces</span> and contact us if you have a specific enquiry.
            </p>
          </div>
          <p></p>
        </div>
        <div className="about-uss-ctn">
          <Link to="/gemstones">
            <div className="about-uss">See more</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">HANDMADE JEWELRY</h2>
          <h1 className="second-title">The perfect gift</h1>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <p>Our collection jewelry</p>
        </div>
        <div className="jewellery-img-ctn">
          <div className="jewellery-img-wrapper">
            {JewelFour.map((jewel, index) => (
              <div className="jewellery-img jewellery-two">
                <img src={jewel} index={index} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="title-ctn">
          <p>
            {" "}
            <span>'Helios'</span>
          </p>
        </div>

        <div className="title-ctn">
          <h1 className="second-title">
            Hand carved gem quality rainbow moonstone faces set in 18 carat
            french yellow gold and diamonds. The Sun and the Moon in one design.
          </h1>
        </div>
        <div className="about-uss-ctn">
          <Link to="/gemstones">
            <div className="about-uss">Explore</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">WHY BESPOKE?</h2>
          <h1 className="second-title">The perfect gift</h1>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">
            Being involved in the process ﻿of high quality jewelry making is a
            unique experience
          </h2>
        </div>
        <div className="jewellery-img-ctn">
          <div className="jewellery-img-wrapper">
            {jewelFive.map((jewel, index) => (
              <div className="jewellery-img jewellery-two">
                <img src={jewel} index={index} alt="" />
              </div>
            ))}
            <div className="jewellery-img jewellery-two">
              <img src={JewelNine} alt="" />
            </div>
            <div className="jewellery-img jewellery-two">
              <img src={JewelEight} alt="" />
            </div>
          </div>
        </div>
        <div className="title-ctn">
          <p>
            We have{" "}
            <span>passion for great design and attention to detail.</span> For
            this reason we use fine quality gemstones and work with some of the
            best craftsmen in the USA to manufacture fine quality unique pieces
            of jewelry.
          </p>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default Jewelries;
