import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./solutionsDetails.scss";
import { Wheel, Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer from "../Footer/Footer";
const Solutions4 = () => {
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
            backgroundImage: `url('./dangerous.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",

            zIndex: 0,
          }}
        ></div>

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
          HAZMAT
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
            Country Time Transport LLC has a fully optimized network to handle
            e-commerce shipments from the UAE. We also arrange for
            cost-effective collection and delivery of shipments above 100kg
            through our adept personnel, ensuring your merchandise reaches
            several destinations without any hassle. Associated services include
            customs brokerage and insurance options, which can be availed as per
            order requirement. Detailed trucking options can be viewed on our
            Full Truck Load and Part Load Trucking pages. The combination of
            expert drivers and a hardworking operations team ensures that the
            process of shipping is as smooth as possible and results in timely,
            secure deliveries.
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

export default Solutions4;
