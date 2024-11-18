import React from "react";
import { Cardboard, Danger, Shopping, Truckload, Wheel } from "../../Svg";
import "./solutions.scss";
import { useNavigate } from "react-router-dom";

const Solutions = () => {
  const navigate = useNavigate();
  return (
    <div className="allcontainer">
      <div className="serivessection">
        <div className="serviceText">
          <div className="ServiceHeading">
            <Wheel />
            <h3>SOLUTIONS</h3>
          </div>
          <h1>We are fully equipped</h1>
          <p>
            Adjusting to our customers’ ever-changing demands and requirements
            is what got us where we are.
            Take a look at the kind of transport we can arrange for you.
          </p>
        </div>
      </div>

      <div className="togglecontainer">
        <div className="row">
          <div className="column" onClick={() => navigate("/fullload")}>
            <Truckload height="43px" width="43px"/>
            Full Truck Load
          </div>
          <div className="column" onClick={() => navigate("/partload")}>
            <Cardboard height="40px" width="40px" />
            Part Load
          </div>
        </div>
        <div className="row">

        {/* <div className="column" onClick={() => navigate("/ecommerce")}>
            <Shopping />
            E-Commerce
          </div> */}
          {/* <div className="column" onClick={() => navigate("/hazmat")}>
            <Danger />
            Hazmat
          </div> */}
          </div>
        </div>
      </div>
  );
};

export default Solutions;
