import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import myImage from "/assets/profilepic.jpg";
import "../App.css";
import logo from "/assets/jslogo2.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {" "}
        {/* Ensures proper spacing */}
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="My Logo" width="150" height="150" />
        </Link>
        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)} // Toggle menu state
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links (Right-Aligned) */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron() {
  const navigate = useNavigate();
  return (
    <div className="jumbotron jumbotron-fluid my-jumbotron-bg">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Image on the left */}
          <div className="col-md-6">
            <img
              src={myImage}
              alt="A picture of me"
              className="profile-image img-fluid"
            />
            <div className="cta-buttons">
              <button onClick={() => navigate("/projects")}>
                {" "}
                {/* Updated */}
                View My Work
              </button>
              <button onClick={() => navigate("/contact")}>
                {" "}
                {/* Updated */}
                Let's Connect
              </button>
            </div>
          </div>
          {/* Text on the right */}
          <div className="col-md-6 display-4">
            <ul>
              <li>
                <p>James Sneath</p>
              </li>
              {/* <li>
                <p>I'm a Front-End Web Developer</p>
              </li> */}
              <li>
                <p>Front-End Developer | London, UK</p>
              </li>
            </ul>

            <div className="home-content">
              <p className="description">
                Hi, I’m James, a UK-based front-end developer who thrives on
                turning creative ideas into seamless, pixel-perfect web
                experiences. With a passion for clean code and tools like React
                and Tailwind CSS, I build interfaces that blend functionality
                with flair. My journey in tech kicked off with a love for
                problem-solving, and now I’m all about crafting digital
                solutions that make an impact. When I’m not coding, you’ll find
                me exploring design inspiration or lost in a good book. Curious
                about my work? Please check out my project page! Oh, and have a
                go at the game below. Let me know what score you get!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
export { Jumbotron };
