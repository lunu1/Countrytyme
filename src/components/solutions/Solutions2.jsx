import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./solutionsDetails.scss";
import { Wheel, Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer from "../Footer/Footer";

const Solutions2 = () => {
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
            backgroundImage: `url('./truckpartload.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:
              "sepia(100%) saturate(1000%) hue-rotate(180deg) brightness(40%)",
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
          PART LOAD
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>Cost-effective and environment-friendly</h2>
          </div>

          <p>
            Our Loose Container Load (LCL) service offers a smart and
            sustainable option for shipping freight that doesn’t require a full
            truckload. By combining cargo from multiple shippers into a single
            truck, LCL provides a cost-effective and environmentally friendly
            solution. This service is perfect for small businesses that want the
            benefits of professional shipping without paying for unused space.
            Compared to small package shipping, LCL ensures better cargo
            security and reduces the risk of loss, all while offering
            competitive rates and high-quality service.
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

export default Solutions2;
