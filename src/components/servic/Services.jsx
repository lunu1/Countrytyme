import "./services.scss";

import React, { useEffect } from "react";
import { Wheel } from "../../Svg";
import { useNavigate } from "react-router-dom";

const Services = () => {

const  navigate = useNavigate();

  return (
    <div className="servicepage">
      <div className="service">
        <div className="servicePhoto">
          <img src="/services.jpg"></img>
        </div>
        <div className="AboutText">
          <div
            className="weProvide"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "20px",
              alignItems: "center",
              // justifyContent:"center"
            }}
          >
            <Wheel />
            <h3>WHAT WE PROVIDE </h3>
          </div>
          <h1>
            Beyond transport, We ensure total <span>Support</span>
          </h1>
          <div className="points">
            {/* <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>Customs Brokerage</h3>
              </div>
            </div> */}
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>24/7 security monitoring</h3>
              </div>
            </div>
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>Regulatory affairs</h3>
              </div>
            </div>

            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>24/7 patrolling unit</h3>
              </div>
            </div>
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>Customized solutions</h3>
              </div>
            </div>
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>Bonded licensing</h3>
              </div>
            </div>
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>GPS tracking</h3>
              </div>
            </div>
            <div className="service-item">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <Wheel />
                <h3>Insurance services</h3>
              </div>
            </div>
            <p>
            Comprehensive support beyond transport – from 24/7 security monitoring and GPS tracking to customized solutions and insurance services, we ensure your cargo is protected and managed at every step
            </p>
            <button onClick={()=>{navigate('/AboutDetails')}}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
