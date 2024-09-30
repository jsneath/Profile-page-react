import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import myImage from "/assets/-1tgddd.jpg";
import "../App.css";

function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Profile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">
                  My Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid my-jumbotron-bg">
      <div className="container-fluid text-on-image">
        <h1 className="display-4">James Sneath</h1>
        <p className="lead">
          Welcome, to my personal portfolio website where i show off my latest
          projects
        </p>
        <img src={myImage} alt="A picture of me" className="profile-image" />
      </div>
    </div>
  );
}

export default NavBar;
export { Jumbotron };
