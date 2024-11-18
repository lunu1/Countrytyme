import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";

const Safety = () => {

const navigate = useNavigate();

  return (
    <div className="whoweare">
      <div className="whotext">
        <h1>SAFETY AND SECURITY</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Safety and Security-Safety and Security be at the core of everything
          we undertake here at Country Time Transport LLC. Indeed, in excess of
          30 years in this industry, we are doing everything possible to ensure
          your merchandise is securely moved from port to warehouse, be it a
          full container load or a loose load. Safety extends into our fleet,
          too; regular checks on all trucks and trailers mean dependability you
          can count on down the road.
        </p>
        <p style={{ color: "grey" }}>
          Besides our safety measure, we have competitive rates without
          compromising on the quality of our services. Customers' satisfaction
          is our main priority. That's why we keep you informed at every step
          through the daily status report. Focusing our concentration on our
          customers, we have emerged with a good name regarding reliability and
          being trustworthy. You are always assured that your goods are in safe
          hands with us.
        </p>
        <p style={{color :"grey"}}>
          At Country Time Transport LLC, we pride ourselves on competitive rates
          without sacrificing any high-quality service. We have built our
          reputation on adapting to the changing and growing needs of our
          customers while providing solutions to fit your particular needs. Our
          diverse fleet is among the most versatile in the region, and we use
          nothing but cutting-edge digital equipment for the most reliable,
          efficient transport possible. Let us handle your logistics with ease
          and expertise.
        </p>
        <button onClick={()=>navigate("/contact")}>contact us</button>
      </div>
      <div className="Historyphoto">
        <img src="/safety.png" alt="lady" />
      </div>
    </div>
  );
};

export default Safety;
