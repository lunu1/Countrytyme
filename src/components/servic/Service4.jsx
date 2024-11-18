import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./servicedetails.scss";
import { Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer from "../Footer/Footer";
const Techservice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="solutionsDetails">
      <div
        className="imageonTop"
        style={{ position: "relative", height: "60vh", width: "100vw" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage: `url('./techhh.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(40%)",
            zIndex: 0,
          }}
        ></div>

        {/* Navbar and text */}
        <div
          className="navbarHome"
          style={{ zIndex: 1, position: "absolute", width: "100vw" }}
        >
          <NavbarHome />
        </div>
        <div
          className="centered-text"
          style={{
            zIndex: 1,
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          TECHNOLOGY SERVICES
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>We Are Fully Committed to Excellence</h2>
          </div>

          <p>
            Whenever someone invests time, energy, and expertise in creating
            top-notch technology solutions, one needs transport that should be
            nothing less than just perfect. At Country Time Transport LLC, we
            ensure your technology consignments are dealt with precision and
            care right at your doorsteps. We facilitate timely delivery of your
            tech products-be it from the warehouse to the end-user or any other
            vital point in your supply chain. With our adaptable solutions,
            ranging from Full Truck Loads and Part Truck Loads to Expedited
            Trucking, the dynamic demands of the technology industry are aptly
            met. Additionally, our retail distribution services will look to
            optimize your supply chain flow for efficiency at its finest. Call
            our experts now to discuss your technology needs, and we will be
            delighted to present you with a tailored proposal just for you.
          </p>
        </div>
      </div>
      <div className="cardsliderfooter">
        <CardSlider />
       
      </div>
      <Footer/>
    </div>
  );
};

export default Techservice;
