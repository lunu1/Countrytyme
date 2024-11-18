import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./sidebar/Sidebar";


function Navbar() {
  const navigate= useNavigate()
  return (
    <div className="navbar">
      <div className="sidebarlogo">
        <div className="sidebarrr">
          <Sidebar />
        </div>
      </div>
      <div className="wrapperr">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="imagee">
            <Link to="/">
              <img src="/Logo1.png" alt="Logo" />
            </Link>
          </div>
        </motion.span>

        <div className="social">
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("solutions");
              const offset = -100;
              const sectionPosition =
                section.getBoundingClientRect().top + window.scrollY + offset;

              window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
              });
            }}
          >
            Solutions
          </a>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("services");
              const offset = -145;
              const sectionPosition =
                section.getBoundingClientRect().top + window.scrollY + offset;

              window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
              });
            }}
          >
            Services
          </a>
          <a href="#network">Industries</a>
          <a
            href="#network"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("network");
              const offset = 650;
              const sectionPosition =
                section.getBoundingClientRect().top + window.scrollY + offset;

              window.scrollTo({
                top: sectionPosition,
                behavior: "smooth",
              });
            }}
          >
            Network
          </a>
          <a href="#About">About</a>
          <Link
            to="/contact"
            onClick={() => navigate("/contact")}
          >
             Contact
             </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
