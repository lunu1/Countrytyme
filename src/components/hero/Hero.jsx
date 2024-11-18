import "./hero.scss";
import { animate } from "framer-motion";
import { motion, useInView } from "framer-motion";
import Navbar from "../navbar/Navbar";
import React, { useRef, useState, useEffect } from "react";
import { Twitter, Instagram, LinkedIn, Facebook } from "../../Svg";
import Sidebar from "../navbar/sidebar/Sidebar";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const backgroundImages = [
    "/truckN2.jpg",
    "/Truck1.jpg",
    "/truckN7.jpg",
    "./truckC.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div
      className="hero"
      ref={ref}
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }} // Dynamic background image
    >
      <Navbar/>
         <Sidebar/>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Need it there fast?</motion.h2>
          <motion.h1 variants={textVariants}>
            We'll haul it with care!
          </motion.h1>
          <motion.h4 variants={textVariants}>
            Reliable truck transport for all your heavy-duty needs
          </motion.h4>
          <motion.div className="buttons" variants={textVariants}>
            {/* <button onClick={() => document.getElementById('Portfolio').scrollIntoView({ behavior: 'smooth' })} variants={textVariants}>See the Latest work</button> */}
            <button
              onClick={() =>
                document
                  .getElementById("Contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              variants={textVariants}
            >
              Contact Us
            </button>
            <motion.img
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt="scroll"
            />
          </motion.div>
        </motion.div>

        {/* <div className="socialmedia">
          <a href="#">
            <div className="circle">
              <Instagram />
            </div>
          </a>
          <a href="#">
            <div className="circle">
              <LinkedIn />
            </div>
          </a>
          <a href="#">
            <div className="circle">
              <Twitter />
            </div>
          </a>
          <a href="#">
            <div className="circle">
              <Facebook />
            </div>
          </a>
        
        </div> */}
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Country-tyme transport LLC

      </motion.div>
    </div>
  );
};

export default Hero;
