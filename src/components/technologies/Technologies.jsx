// import React from 'react'
import { Globe, Truck, Safety, Operation } from "../../Svg";
import "./technologies.scss";
import { animate, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Techsvg = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (

    <div className="skill">
       <h1>
          Quality on the <span>Move</span>
        </h1>
    <div className="svg">
      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="Safety"
      >
        <Safety />
        <div className="svgtext">safety and security</div>
      </motion.div>
      <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="Truck"
      >
        <Truck />
        <div className="svgtext">Largest Fleet</div>
      </motion.div>

      <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="Operation"
      >
        <Operation />
        <div className="svgtext">Operation Excellence</div>
      </motion.div>
      <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="Globe"
      >
        <Globe />
        <div className="svgtext"> Wide Network</div>
      </motion.div>
    </div>
    </div>
  );
};

const Technologies = () => {
  const navigate = useNavigate();

  return (
    <div className="technologies">
      <div className="about">
        <div className="AboutPhoto">
          <img src="/TruckWomen2.jpg"></img>
        </div>
        <div className="AboutText">
          <h3>Who we are</h3>
          <h4>
            At Country Tyme Transport LLC, we specialize in providing
            comprehensive land freight solutions for all types of cargo.
          </h4>
          <p>
            For nearly 50 years, Country Tyme Transport LLC has pioneered a
            customer-first approach to road transport, blending innovation with
            personalized service. Leading businesses across diverse industries
            rely on us to deliver exceptional shipping solutions. We are
            committed to supporting our clients at every step of the journey
          </p>
          <button onClick={() => navigate("/AboutDetails")}>Read More</button>
        </div>
      </div>

      
      <Techsvg />
    </div>
  );
};

export default Technologies;
