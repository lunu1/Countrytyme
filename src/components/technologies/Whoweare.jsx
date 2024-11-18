import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";

const Whoweare = () => {
  const navigate = useNavigate();
  return (
    <div className="whoweare">
      <div className="whotext">
        <h1>WHO WE ARE</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          At Country Tyme Transport LLC, we pride ourselves on offering
          exceptional goods transport services from ports to warehouses across
          the UAE. With over 30 years of experience in the industry, we have
          established ourselves as a trusted and reliable name in the
          transportation sector. Whether you need full container loads (FCL) or
          loose container loads (LCL), our expert team is here to handle your
          cargo with the utmost care and attention.
        </p>
        <p style={{ color: "grey" }}>
          Our fleet consists of 40 trucks and 60 trailers, including both 20ft
          and 40ft units, enabling us to cater to a wide range of transportation
          needs. We are committed to delivering cost-effective, high-quality
          services that exceed our clients' expectations.
        </p>
        <p style={{ color: "grey" }}>
          Our customer-centric approach sets us apart. We prioritize client
          satisfaction by offering competitive rates, ensuring reliable service,
          and providing daily status reports to keep you informed at every step
          of the journey. At Country Tyme Transport, your trust is our driving
          force, and we aim to maintain our reputation as a dependable partner
          for all your transportation needs.
        </p>
        <button onClick={()=>navigate("/contact")}>contact us</button>
      </div>
      <div className="whophotosss">
        <img src="/aboutuswomen.jpg" alt="lady" />
      </div>
    </div>
  );
};

export default Whoweare;
