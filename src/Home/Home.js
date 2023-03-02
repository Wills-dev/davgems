import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import banner from "../assets/images/black_opal.webp";
import banner1 from "../assets/images/black_opals.webp";
import banner4 from "../assets/images/ruby.webp";
import banner5 from "../assets/images/IMG.webp";
import ContactCom from "../components/ContactCom";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "../components/NavBar";
import PhoneNumber from "../components/PhoneNumber";

const Home = () => {
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
                <img src={banner4} alt="banner" />
              </div>
              <div className="each-slide">
                <img src={banner5} alt="banner" />
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="about-uss-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <Link to="/about-us">
            <div className="about-uss">About us...</div>
          </Link>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <h2 className="first-title">OUR JOURNEY IN THE WORLD OF GEMS</h2>
          <h1 className="second-title">
            Began in the opal mining fields three decades ago...
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div
              className="journey-ima-ctn image-one"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
            <div
              className="journey-wrapper "
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
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
                  Today, we have made a name for ourselves in America, the
                  country where jewelry is styled most frequently. Here, we
                  source and provide excellent colored gemstones to some of the
                  most well-known jewelry firms and designers in the world.
                </p>
              </div>
            </div>
          </div>
          <div className="journey ">
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">Gemstone Traders - US</h4>
                <p className="journey-paragraph">
                  We are involved in all aspects of the process of jewelry
                  making.
                </p>
                <p className="journey-paragraph">
                  From sourcing rough gems, cutting and polishing them to
                  designing bespoke one-of-a-kind pieces of jewelry for our
                  private clients.
                </p>
                <p className="journey-paragraph">
                  We are passionate about our industry and are involved in the
                  ethical sourcing of gemstones and play an active role in the
                  efforts of the International Coloured Gemstone Association
                  (ICA)
                </p>
              </div>
            </div>

            <div
              className="journey-ima-ctn image-two"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
          </div>
        </div>
        <div
          className="about-uss-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <Link to="/about-us">
            <div className="about-uss">Find out more...</div>
          </Link>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <h2 className="first-title">PEARL ASSET GEMSTONE TRADERS</h2>
          <h1 className="second-title">
            Based in United states, one of the significant gemstone producer
            worldwide
          </h1>
        </div>

        <div className="journey-ctn">
          <div
            className="journey"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-offset="300"
          >
            <div
              className="journey-ima-ctn image-three"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">
                  Gemstone Dealers and Experts
                </h4>
                <p className="journey-paragraph">
                  United States is home to one of the world’s jewelry centers.
                  Fine quality color gemstones are the focus and specialty of
                  Pearl Asset Gems Ltd.
                </p>
                <p className="journey-paragraph">
                  A personal passion and life long interest for sourcing and
                  supplying unusual and rare gemstones for our clients, means
                  that we are constantly on the hunt for fine exceptional
                  gemstones.
                </p>
                <h4 className="journey-country">
                  Gemstones Direct from the Source
                </h4>
                <p className="journey-paragraph">
                  Visiting important international gemstone exhibitions around
                  the world and mines every year is important to us. Sourcing
                  gemstones of exceptional quality at the best possible price is
                  one of our strengths.
                </p>
              </div>
            </div>
          </div>
          <div className="journey">
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">
                  Gemstones of Exceptional Quality
                </h4>
                <p className="journey-paragraph">
                  The gemstones we deal in are of the highest quality and
                  standards. Whether it is an amethyst or a ruby, one thing is
                  certain that they will both be of great quality.The gemstones
                  we deal in are of the highest quality and standards. Whether
                  it is an amethyst or a ruby, one thing is certain that they
                  will both be of great quality.
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
                  Chosen to be one of the European Directors of the ICA enables
                  us to support these practices.
                </p>
              </div>
            </div>

            <div
              className="journey-ima-ctn image-four"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
          </div>
        </div>
        <div
          className="certification"
          data-aos="fade-zoom-in"
          data-aos-duration="2000"
          data-aos-offset="300"
        >
          <p>
            Our gemstones have certificates from the most reputable gem
            laboratories in the world such as <br />
            Gubelin, SSCF, GRS, GIA
          </p>
        </div>
        <div className="quote">
          <p>
            {" "}
            'Whether it is an amethyst or a ruby, one thing is certain that they
            will both be of great quality.'
          </p>
        </div>
        <div
          className="quote-img-ctn"
          data-aos="fade-zoom-in"
          data-aos-duration="2000"
          data-aos-offset="300"
        >
          <div className="quote-img-one"></div>
          <div className="quote-img-two"></div>
        </div>
        <div
          className="about-uss-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <Link to="/what-we-do">
            <div className="about-uss">What we do</div>
          </Link>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <h2 className="first-title">GEMSTONE SPECIALISTS</h2>
          <h1 className="second-title">
            We specialise in a wide variety of coloured gemstones and diamonds
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div
              className="journey-ima-ctn image-five"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">Our Expertise</h4>
                <p className="journey-paragraph">
                  We specialise in a wide variety of fine coloured gemstones and
                  coloured diamonds. Through our extensive worldwide network of
                  contacts we are able to source gemstones from all over the
                  world at the best possible prices.
                </p>
                <p className="journey-paragraph">
                  We always strive to listen to our clients needs and
                  specifications and aim to offer suitable solutions that meet
                  with their expectations.
                </p>
                <p className="journey-paragraph">
                  We frequently offer our clients our expert advice on coloured
                  gemstones discussing with their jewelry designers and
                  manufacturers the availability price and supply of their
                  chosen gemstone.
                </p>
              </div>
            </div>
          </div>
          <div className="journey ">
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">Passion for Gemstones</h4>
                <p className="journey-paragraph">
                  It's an exciting process and certainly very rewarding to see
                  our gems being used by some of the best jewelry designers and
                  jewelry houses in the world.
                </p>
                <p className="journey-paragraph">
                  Ranging from ruby, sapphire, emerald, opal, aquamarine,
                  tsavorite, tourmaline, rubellite, fine moonstone to pink
                  diamonds and other gemstones, our main aim is to supply
                  gemstones of fine quality.
                </p>
                <p className="journey-paragraph">
                  Whether it is an amethyst or a ruby, one thing is certain that
                  they will both be of exceptional quality.
                </p>
              </div>
            </div>

            <div
              className="journey-ima-ctn image-six"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
          </div>
        </div>
        <div
          className="about-uss-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <Link to="/gemstones">
            <div className="about-uss">Gemstones</div>
          </Link>
        </div>
        <div
          className="title-ctn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <h2 className="first-title">FINE JEWELLERY</h2>
          <h1 className="second-title">
            One-of-a-kind Bespoke jewelry Antique Jewellery
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div
              className="journey-ima-ctn image-seven"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
            <div className="journey-wrapper">
              <div
                className="journey-paragraph-ctn"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-offset="300"
              >
                <h4 className="journey-country">Unique Bespoke Jewellery</h4>
                <p className="journey-paragraph">
                  Our many years of expertise in the jewelry industry has
                  enabled us to develop and build trusted relationships with our
                  very own private clients, of whom many we are now fortunate
                  enough to call our friends and who frequently call and
                  commission us to manufacture for them and their families
                  unique bespoke jewelry.
                </p>
                <h4 className="journey-country">
                  The Jewellery Design Process
                </h4>
                <p className="journey-paragraph">
                  Our approach to designing jewelry has always been to firstly
                  listen carefully to the client’s desires and requirements and
                  then guide them through the process providing them with
                  options that suit their budget, taste and choice of design.
                  This means that we explore gemstone options, designs,
                  manufacturing materials and methods, always allowing the
                  client to make informed decisions about their chosen design.
                </p>
              </div>
            </div>
          </div>
          <div className="journey ">
            <div
              className="journey-wrapper"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            >
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">
                  Exceptional Quality and Craftsmanship
                </h4>
                <p className="journey-paragraph">
                  Once designs have been approved, we manufacture their chosen
                  piece using some of the best jewelry manufacturers in the US.
                  We are really passionate about high quality manufacturing with
                  attention to detail and our clients value our expert advice
                  and skills allowing them to feel confident about the whole
                  process.
                </p>
                <h4 className="journey-country">
                  The Uniqueness of Personalised Design
                </h4>
                <p className="journey-paragraph">
                  Designing a bespoke piece of jewelry, whether it is an
                  engagement ring, an anniversary gift or any other occasion, is
                  a really unique and exciting process to go through, as it
                  allows clients to be involved in the process and gives them
                  the opportunity to add their very own touch of
                  personalisation.
                </p>
                <p className="journey-paragraph">
                  We take great pride in our jewelry and the trust our clients
                  place in us and believe that each piece of jewelry designed
                  and manufactured should enhance the wearers’ experience and
                  satisfaction.
                </p>
              </div>
            </div>
            <div
              className="journey-ima-ctn image-eight"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="300"
            ></div>
          </div>
        </div>
        <div className="about-uss-ctn">
          <Link to="/jewelries">
            <div className="about-uss">Browse...</div>
          </Link>
        </div>
        <ContactCom />
      </div>
    </div>
  );
};

export default Home;
