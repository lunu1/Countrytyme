import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./servicedetails.scss";
import { Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer from "../Footer/Footer";
const Medical = () => {
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
            backgroundImage: `url('./pharmacyservice.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:"brightness(40%)",
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
          PHARMA AND LIFE SCIENCE
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>
              Specialty Logistics for Pharmaceuticals and Medical Supplies
            </h2>
          </div>

          <p>
            Country Time Transport LLC recognizes how critical it is to move
            your pharmaceuticals in a completely safe and efficient manner.
            That's why we're proud to offer an added level of logistics services
            to ensure that time- and temperature-sensitive items arrive at their
            destination in perfect condition, using the latest equipment with
            special handling procedures. Our staff are trained to follow
            international transport guidelines and regulations to the letter,
            providing additional security and reliability that medicines,
            medical supplies, and equipment require. Trust us to manage your
            shipments with extraordinary attention to care and precision.
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

export default Medical;
