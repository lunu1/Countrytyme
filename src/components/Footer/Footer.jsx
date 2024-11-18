import React from "react";
import "./footer.scss"; // Import your CSS/SCSS for styling
import { Twitter, Instagram, LinkedIn, Facebook } from "../../Svg";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section company-info">
          <h4>About Us</h4>
          <p>
            We are a leading company offering top-notch services across the UAE,
            committed to excellence and customer satisfaction.
          </p>
        </div>

        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Phone: 0521910003</p>
          <p>
            Email:
            <a href="mailto:info@yourdomain.com">
              Customerservice@countrytyme.co
            </a>
          </p>
        </div>

        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#solutions">Solutions</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
            </li>
            <li>
              <a href="#network">Industries</a>
            </li>
           
          </ul>
        </div>

        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="socialmedia">
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
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button
              type="submit"
              onClick={() => {
                alert("try again later");
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footerbottom">
        <p>
          &copy; {new Date().getFullYear()} Country Tyme Transport LLC. All rights
          reserved.
        </p>
        <p>
          <a href="#">Privacy Policy</a> |{" "}
          <a href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
