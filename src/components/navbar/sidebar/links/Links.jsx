import { Link } from "react-router-dom";
import "../sidebar.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="links"
      variants={variants}
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.a
        href="#About"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("About");
          const offset = 110;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }}
      >
        About
      </motion.a>
      <motion.a
        href="#services"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("services");
          const offset = 70;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }}
      >
        Services
      </motion.a>
      <motion.a
        href="#solutions"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("solutions");
          const offset = 230;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }}
      >
        Solutions
      </motion.a>
      <motion.a
        href="#network"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("network");
          const offset = 280;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }}
      >
        Industries
      </motion.a>
      <motion.a
        href="#network"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById("network");
          const offset = 480;
          const sectionPosition =
            section.getBoundingClientRect().top + window.scrollY + offset;

          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          });
        }}
      >
        Network
      </motion.a>
      <Link
        to="/contact"
        onClick={() => navigate("/contact")}
        
      >
        Contact
      </Link>
    </motion.div>
  );
};

export default Links;
