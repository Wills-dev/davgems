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
import partnerOne from "../assets/images/international.webp";
import partnerTwo from "../assets/images/accredited.webp";
import logo from "../assets/images/wills (1).png";

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
            <div className="journey-ima-ctn image-one"></div>
            <div className="journey-wrapper">
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
                  of the jewellery district in London, where we source and
                  supply fine coloured gemstones to some of the world's most
                  famous jewellery designers and jewellery houses.
                </p>
              </div>
            </div>
          </div>
          <div className="journey ">
            <div className="journey-wrapper">
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
                  efforts of the International Coloured Gemstone Association
                  (ICA)
                </p>
              </div>
            </div>

            <div className="journey-ima-ctn image-two"></div>
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
            <div className="journey-ima-ctn image-three"></div>
            <div className="journey-wrapper">
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">
                  Gemstone Dealers and Experts
                </h4>
                <p className="journey-paragraph">
                  Based in Hatton Garden the heart of London's Jewellery
                  district, McLauchlan Gems Ltd specialises and deals in fine
                  quality coloured gemstones.
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
            <div className="journey-wrapper">
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

            <div className="journey-ima-ctn image-four"></div>
          </div>
        </div>
        <div className="certification">
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
        <div className="quote-img-ctn">
          <div className="quote-img-one"></div>
          <div className="quote-img-two"></div>
        </div>
        <div className="about-us-ctn">
          <Link to="/what-we-do">
            <div className="about-us">What we do</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">GEMSTONE SPECIALISTS</h2>
          <h1 className="second-title">
            We specialise in a wide variety of coloured gemstones and diamonds
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div className="journey-ima-ctn image-one"></div>
            <div className="journey-wrapper">
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
                  gemstones discussing with their jewellery designers and
                  manufacturers the availability price and supply of their
                  chosen gemstone.
                </p>
              </div>
            </div>
          </div>
          <div className="journey ">
            <div className="journey-wrapper">
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">Passion for Gemstones</h4>
                <p className="journey-paragraph">
                  It's an exciting process and certainly very rewarding to see
                  our gems being used by some of the best jewellery designers
                  and jewellery houses in the world.
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

            <div className="journey-ima-ctn image-two"></div>
          </div>
        </div>
        <div className="about-us-ctn">
          <Link to="/gemstones">
            <div className="about-us">Gemstones</div>
          </Link>
        </div>
        <div className="title-ctn">
          <h2 className="first-title">FINE JEWELLERY</h2>
          <h1 className="second-title">
            One-of-a-kind Bespoke jewellery Antique Jewellery
          </h1>
        </div>
        <div className="journey-ctn">
          <div className="journey">
            <div className="journey-ima-ctn image-one"></div>
            <div className="journey-wrapper">
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">Unique Bespoke Jewellery</h4>
                <p className="journey-paragraph">
                  Our many years of expertise in the jewellery industry has
                  enabled us to develop and build trusted relationships with our
                  very own private clients, of whom many we are now fortunate
                  enough to call our friends and who frequently call and
                  commission us to manufacture for them and their families
                  unique bespoke jewellery.
                </p>
                <h4 className="journey-country">
                  The Jewellery Design Process
                </h4>
                <p className="journey-paragraph">
                  Our approach to designing jewellery has always been to firstly
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
            <div className="journey-wrapper">
              <div className="journey-paragraph-ctn">
                <h4 className="journey-country">
                  Exceptional Quality and Craftsmanship
                </h4>
                <p className="journey-paragraph">
                  Once designs have been approved, we manufacture their chosen
                  piece using some of the best jewellery manufacturers in the
                  UK. We are really passionate about high quality manufacturing
                  with attention to detail and our clients value our expert
                  advice and skills allowing them to feel confident about the
                  whole process.
                </p>
                <h4 className="journey-country">
                  The Uniqueness of Personalised Design
                </h4>
                <p className="journey-paragraph">
                  Designing a bespoke piece of jewellery, whether it is an
                  engagement ring, an anniversary gift or any other occasion, is
                  a really unique and exciting process to go through, as it
                  allows clients to be involved in the process and gives them
                  the opportunity to add their very own touch of
                  personalisation.
                </p>
                <p className="journey-paragraph">
                  We take great pride in our jewellery and the trust our clients
                  place in us and believe that each piece of jewellery designed
                  and manufactured should enhance the wearers’ experience and
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="journey-ima-ctn image-two"></div>
          </div>
        </div>
        <div className="about-us-ctn">
          <Link to="/jewelries">
            <div className="about-us">Browse...</div>
          </Link>
        </div>
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
        {/* <div className="partners">
          <div className="address">
            <div className="logo">
              {" "}
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <p className="main-address">
              Dave Gems Ltd
              <br /> 5th floor Premier House <br />
              12-13 Hatton Garden <br />
              London <br />
              EC1N 8AN <br />
              Tel +44 2078314449
            </p>
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
        </div> */}

        {/* <div className="social-ctn">
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
              <i class="fab fa-linkedin-in"></i>
            </Link>
            Name
          </div>
        </div> */}
        {/* <div className="right-reserved">
          <p>
            © 2022 All Rights Reserved | Dave Gems Ltd <br />
            Gemstone Traders UK
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
