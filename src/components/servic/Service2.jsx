import React, { useEffect } from "react";
import CardSlider from "../cardslick/CardSlick";
import "./servicedetails.scss";
import { Wheels } from "../../Svg";
import NavbarHome from "../navbar/NavbarHome";
import Footer from "../Footer/Footer";
const Manufacture = () => {
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
            backgroundImage: `url('./manufacturing.jpg')`,
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
          MANUFACTURING SERVICES
        </div>
      </div>

      <div className="Solutiontext">
        <div className="points">
          <div className="pointheading">
            <div className="wheels">
              <Wheels />
            </div>

            <h2>
              We Are Dedicated to Delivering Excellence in Manufacturing
              Logistics
            </h2>
          </div>

          <p>
            In the manufacturing industry, precision, reliability, and
            timeliness are crucial for maintaining seamless production and
            distribution cycles. At Country Time Transport LLC, we understand
            the importance of getting your manufacturing goods to their
            destination safely and on schedule. Whether it's raw materials or
            finished products, our logistics services ensure your supply chain
            flows smoothly from the factory floor to the final destination. With
            our Full Truck Load (FTL), Part Truck Load (PTL), and Expedited
            Trucking services, we cater to the diverse and dynamic needs of the
            manufacturing sector. Our solutions are designed to minimize
            downtime, optimize delivery schedules, and enhance overall
            efficiency. Partner with us to streamline your manufacturing
            logistics and ensure your products are where they need to be, when
            they need to be there. Contact our team today for a customized
            logistics plan tailored to your manufacturing requirements.
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

export default Manufacture;
