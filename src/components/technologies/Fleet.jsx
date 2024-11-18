import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";

const Fleet = () => {

const navigate = useNavigate();

  return (
    <div className="whoweare">
      <div className="whotext">
        <h1>LARGEST FLEET</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          At Country Time Transport LLC, we value the understanding that quality
          and timely transportation means a lot to the goods our clients own.
          With the largest fleet of trucks and trailers, we offer truly
          dependable door-to-door retail cargo dispatch by ensuring less
          friction in the movement of goods right from the warehouse to the
          point of sale. Whether you want full truckloads, part truckloads, or
          expedited services, our flexible solutions adapt to your needs. We
          also make sure your supply chain is flowing as efficiently and
          smoothly as possible. Contact our team today for a customized proposal
          tailored to the needs of your brand.
        </p>
       
        <button onClick={()=>{navigate('/contact')}}>contact us</button>
      </div>
      <div className="whophotosss" >
        <img src="/fleet.jpg" alt="lady" style={{width:"18vw"}} />
      </div>
    </div>
  );
};

export default Fleet;
