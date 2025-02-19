import React from "react";
import NavBar from "../components/Header"; // Adjust the path according to your project structure
// import './HomePage.css'; // If you have a specific CSS file for the HomePage
import "../App.css";
import "../index.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function ContactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-info">
        <h2>Contact Information</h2>
        <br />
        <p>
          Email:{" "}
          <a href="mailto:jamessneath1@gmail.com">jamessneath1@gmail.com</a>
        </p>
        <p>
          CV:{" "}
          <a
            href="../public/cv25.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/jsneath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} className="social-icon" />
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/james-sneath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} className="social-icon" />
          </a>
        </p>
      </div>
    </>
  );
}

export default ContactPage;
