import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";

const Operations = () => {
  const navigate = useNavigate();
  return (
    <div className="whoweare">
      <div className="whotext">
        <h1>OPERATION EXCELLENCE</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          At Country Time Transport LLC, we believe your products should arrive
          with that same touch and attention to detail like you created them. We
          pride ourselves on dependable, prompt, versatile transportation
          options for all your needs. From full truckloads to part truckloads,
          even expedited trucking, we make sure that your products will be right
          on time from the warehouse to the point of sale. We are committed to
          providing top-of-the-line services that will ease and facilitate the
          process of your supply chain. That will make life so much easier
          because our team is there to help create a unique transportation plan
          specifically for your business.
        </p>

        <button onClick={()=>navigate("/contact")}>contact us</button>
      </div>
      <div className="whophotosss">
        <img src="/aboutuswomen.jpg" alt="lady" />
      </div>
    </div>
  );
};

export default Operations;
