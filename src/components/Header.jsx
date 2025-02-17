import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import myImage from "/assets/-1tgddd.jpg";
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
            <ol>
              <li>
                <p>{"<Hi, I'm James!>"}</p>
              </li>
              <li>
                <p>{"<I'm a Front-End Web Developer>"}</p>
              </li>
              <li>
                <p>{"<Open for work in London, UK 📍>"}</p>
              </li>
            </ol>

            <div className="home-content">
              <p className="description">
                I'm a passionate Front-End Developer focused on React, building
                interactive, user-friendly web apps with HTML, CSS, and
                JavaScript. I create responsive interfaces that enhance user
                experiences and thrive in dynamic, innovative teams where I can
                continuously learn and contribute.
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
