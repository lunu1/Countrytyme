import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();
  return (
    <div className="whoweare">
     
      <div className="whotext">
        <h1>HISTORY</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Country Time Transport LLC has been a trusted name in the goods
          transport industry for over 30 years, providing seamless logistics
          solutions across the UAE. Specializing in the transport of goods from
          ports to warehouses, we handle both full container loads (FCL) and
          loose container loads (LCL) with precision and efficiency. With a
          fleet of 40 trucks and 60 trailers, including 20ft and 40ft
          containers, we ensure timely and secure delivery of your goods, no
          matter the size of the shipment.
        </p>
        <p style={{ color: "grey" }}>
          At Country Time Transport, we pride ourselves on offering competitive
          rates while maintaining high-quality service standards. Customer
          satisfaction is our top priority, and we demonstrate this through our
          customer-oriented approach, daily status reports, and unwavering
          reliability. Our commitment to building long-term relationships with
          clients is rooted in trust, transparency, and consistent service
          excellence.
        </p>
        <button
              onClick={() =>navigate("/contact")
              }
            >
              Contact Us
            </button>
      </div>
      <div className="Historyphoto">
        <img src="/historypng.png" alt="lady" />
      </div>
    </div>
  );
};

export default History;
