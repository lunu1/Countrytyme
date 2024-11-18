import React, { useEffect } from "react";
import NavbarHome from "../navbar/NavbarHome";
import { NavLink, Outlet } from "react-router-dom"; // Use NavLink instead of Link
import "./aboutdetails.scss";
import { Wheel } from "../../Svg";
import { Techsvg } from "./Technologies";
import Footer from "../Footer/Footer";

const AboutDetails = () => {
  const sidebarLinks = [
    { path: "/AboutDetails", label: "WHO WE ARE" },
    { path: "/AboutDetails/history", label: "OUR HISTORY" },
    { path: "/AboutDetails/safety", label: "SAFETY AND SECURITY" },
    { path: "/AboutDetails/fleet", label: "LARGEST FLEET" },
    { path: "/AboutDetails/operations", label: "OPERATIONS EXCELLENCE" },
    { path: "/AboutDetails/network", label: "WIDE NETWORK" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutdetails">
      <div>
        <NavbarHome />
      </div>
      <div className="wrapperabout">
        <div className="aboutsidebar">
          {sidebarLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="sidebar-link"
              end // ensure the exact match behavior
            >
              <span className="icon">
                <Wheel />
              </span>
              <span className="link-text">{link.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="aboutcontent">
          <Outlet />
        </div>
      </div>

      <div className="techsvg">
        <Techsvg />
      </div>

      <Footer />
    </div>
  );
};

export default AboutDetails;
