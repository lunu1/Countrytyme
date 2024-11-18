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
            backgroundImage: `url('./fullloadtruck.jpg')`,
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
          FULL LOAD
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>The perks of FTL</h2>
          </div>

          <p>
            Full Container Loads (FCL) offer an efficient and eco-conscious
            solution for shipping large volumes of cargo. By dedicating an
            entire container to your shipment, FCL ensures that your goods are
            transported securely and directly, minimizing the need for
            additional handling. This method is ideal for businesses with
            substantial shipments, providing a streamlined process that reduces
            shipping costs and environmental impact. Unlike less-than-truckload
            (LTL) shipping, where cargo from various shippers is combined, FCL
            offers enhanced security and reliability for your goods, ensuring
            they arrive intact and on time.
          </p>
        </div>
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>Expedited Service</h2>
          </div>

          <p>
            We also offer expedited transport solutions tailored to meet your
            urgent shipping needs. Our team of skilled drivers and logistics
            experts ensures that your time-sensitive shipments reach their
            destination safely and on schedule, providing a seamless and
            worry-free experience.
          </p>
        </div>
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>Cross-Docking Solutions</h2>
          </div>

          <p>
            To further streamline your logistics, we offer cross-docking
            services, where inbound goods are unloaded and immediately
            transferred to outbound transport, minimizing delivery time and
            maximizing efficiency. This approach helps optimize your supply
            chain and delivers the best value for your investment.
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
