import React, { useState, useRef, useEffect } from "react";
import NavBar, { Jumbotron } from "../components/Header";
import AutoplayCarousel from "../components/AutoplayCarousel";
import SpaceDodgeGame from "../components/SpaceDodgeGame";
import "../App.css";

function HomePage() {
  const [showGame, setShowGame] = useState(false);
  const gameRef = useRef(null);

  // Scroll to game container when showGame becomes true
  useEffect(() => {
    if (showGame && gameRef.current) {
      gameRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showGame]);

  return (
    <>
      <div className="homePage">
        <NavBar />
        <Jumbotron />
        <br />
        <h3>My Tech Stack</h3>
        <AutoplayCarousel />
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

      {/* Game Component with Ref */}
      {showGame && (
        <div ref={gameRef}>
          <SpaceDodgeGame />
        </div>
      )}
    </>
  );
}

export default HomePage;
