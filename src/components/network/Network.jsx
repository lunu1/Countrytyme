import React from "react";
import { Wheel } from "../../Svg";
import "./network.scss";

const Network = () => {
  return (
    <div>
      <div className="network">
        <div className="textContainer">
          <div
            style={{ display: "flex", gap: "10px", color: "rgb(61, 121, 242)" }}
          >
            <Wheel />
            <h3>NETWORK</h3>
          </div>
          <h1 style={{}}>We’ve got the whole UAE covered!</h1>
          <p style={{ color: "grey" }}>
            The beauty of the desert and the dynamic roads of the UAE is no
            secret to us. We move cargos across the Emirates and have
            strategically located offices to support your logistics needs. In
            addition to helping you plan your domestic deployment, ensuring a smooth experience.
            Looking for optimal coverage? Discover our UAE network.
          </p>
         
        </div>

        <div className="Photo">
          <img src="./Dubai.png"></img>
        </div>
      </div>

      <div className="Inquerie">
        <h1>For inquiries, reach out to us</h1>

        <div className="worktogether">
          <div className="block">
            <h2>Customers</h2>
            <h4>
              "We're here to assist you with all your needs—reach out to us
              anytime!"
            </h4>
            <button
              onClick={() =>
                document
                  .getElementById("Contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
          <div className="block">
            <h2>Suppliers</h2>
            <h4>
              "Partner with us—reach out to explore collaboration
              opportunities!"
            </h4>
            <button
              onClick={() =>
                document
                  .getElementById("Contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
          <div className="block">
            <h2>Careers</h2>
            <h4>
              "Looking to join our team? Contact us for exciting job
              opportunities!"
            </h4>
            <button
              onClick={() =>
                document
                  .getElementById("Contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
