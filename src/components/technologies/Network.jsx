import React from "react";
import "./whoweare.scss";
import { useNavigate } from "react-router-dom";


const Network = () => {
  const navigate = useNavigate();
  return (
    <div className="whoweare">
      <div className="whotext">
        <h1>WIDE NETWORK</h1>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Country Time Transport LLC understands your needs for consistent,
          premium transportation of your goods. With the network we have and the
          flexible options, timely pickup from warehouse to point of sale is
          definitely made available. Whether full truck loads or part loads, or
          expedited services needed, our diverse fleet is prepared to answer the
          dynamic demands of the retail industry. Let us help you smoothen your
          supply chain and get maximum efficiency with our customized
          distribution services. Please do not hesitate to get in touch with our
          team with your personalized proposal for business needs
        </p>

        <button onClick={()=>navigate("/contact")}>contact us</button>
      </div>
      <div className="whophotosss" style={{border:"0px"}}>
        <img src="/worldglobe.png" alt="lady" />
      </div>
    </div>
  );
};

export default Network;
