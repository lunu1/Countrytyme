import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./servicedetails.scss";
import { Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer  from "../Footer/Footer";
const Retail = () => {
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
            backgroundImage: `url('./RetailService.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:
            "brightness(40%)",
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
          RETAIL
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>Competitive pricing for comprehensive transport solutions.</h2>
          </div>

          <p>
            When you invest in manufacturing quality goods, you deserve equally
            exceptional transport services. At Country Time Transport LLC, we
            ensure that your retail cargo is dispatched from the warehouse to
            the point of sale with precision and timeliness. We have full truck
            load, part truck load, and expedited trucking, among other services,
            aimed at matching your needs. We can also help with managing your
            supply chain flow to improve efficiency and effectiveness. Please do
            not hesitate to contact our team, which is prepared to discuss your
            needs and provide a proper proposal for your specific situation.
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

export default Retail;
