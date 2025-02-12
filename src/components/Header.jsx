import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import myImage from "/assets/-1tgddd.jpg";
import "../App.css";
import logo from "/assets/jslogo2.png";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="My Logo" width="150" height="150" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-item nav-link">
            My Work
          </Link>
          <Link to="/contact" className="nav-item nav-link">
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron() {
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
              <button onClick={() => (window.location.href = "/projects")}>
                View My Work
              </button>
              <button onClick={() => (window.location.href = "/contact")}>
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
