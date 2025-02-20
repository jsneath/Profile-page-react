import React, { useState } from "react";
import NavBar, { Jumbotron } from "../components/Header"; // Adjust the path according to your project structure
import AutoplayCarousel from "../components/AutoplayCarousel";
import SpaceDodgeGame from "../components/SpaceDodgeGame";
import "../App.css";

function HomePage() {
  const [showGame, setShowGame] = useState(false);
  return (
    <>
      <div className="homePage">
        <NavBar />
        <Jumbotron />
        <br />
        <h3>My Tech Stack</h3>
        <AutoplayCarousel />
        {/* <div className="home-content">
        <p className="description">
          I'm a passionate Front-End Developer focused on React, building
          interactive, user-friendly web apps with HTML, CSS, and JavaScript. I
          create responsive interfaces that enhance user experiences and thrive
          in dynamic, innovative teams where I can continuously learn and
          contribute.
        </p>
      </div> */}
      </div>
      {/* Game Toggle Button */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => setShowGame(!showGame)}
          style={{
            padding: "10px 20px",
            background: "#ffb703",
            color: "#1a1a2e",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showGame ? "Hide Game" : "Play Space Dodge!"}
        </button>
      </div>

      {/* Game Component */}
      {showGame && <SpaceDodgeGame />}
    </>
  );
}

export default HomePage;
