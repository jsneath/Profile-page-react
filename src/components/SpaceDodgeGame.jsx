import React, { useState, useEffect, useRef } from "react";
import "../index.css"; // Ensure this points to your CSS file

const SpaceDodgeGame = () => {
  const [shipPosition, setShipPosition] = useState(50);
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const gameAreaRef = useRef(null); // Added ref for scrolling to game area

  // Handle ship movement with arrow keys
  const handleKeyDown = (e) => {
    if (gameOver) return;
    if (e.key === "ArrowLeft" && shipPosition > 5) {
      setShipPosition((prev) => prev - 5);
    } else if (e.key === "ArrowRight" && shipPosition < 95) {
      setShipPosition((prev) => prev + 5);
    }
  };

  // Generate new asteroids
  const spawnAsteroid = () => {
    const size = Math.random() * 4 + 3; // Size between 3% and 7% of game area height
    const position = Math.random() * 90; // Random horizontal position (0% to 90%)
    return {
      id: Date.now() + Math.random(),
      top: -size - 10, // Start above screen
      left: position,
      size,
    };
  };

  // Start the game and scroll to game area
  const startGame = () => {
    setGameStarted(true);
    setAsteroids([]);
    setScore(0);
    setGameOver(false);
    setTimeLeft(600);
    setShipPosition(50);
    // Scroll to game area to ensure visibility
    if (gameAreaRef.current) {
      gameAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setAsteroids((prev) => {
        const elapsedTime = 600 - timeLeft;
        const asteroidSpeed = Math.min(3.0 + elapsedTime * 0.01, 9.0);
        const spawnRate = Math.min(0.15 + elapsedTime * 0.0005, 0.45);

        const newAsteroids = prev
          .map((a) => ({
            ...a,
            top: a.top + asteroidSpeed,
          }))
          .filter((a) => a.top < 120);

        if (Math.random() < spawnRate) {
          newAsteroids.push(spawnAsteroid());
          if (Math.random() < 0.5) {
            newAsteroids.push(spawnAsteroid());
          }
        }

        // Define ship dimensions for collision detection (in %)
        const shipWidth = 5; // Adjust based on actual spaceship width
        const shipHeight = 12.5; // Adjust based on actual spaceship height
        const shipTop = 85; // Spaceship top position (adjusted for visibility)
        const shipBottom = shipTop + shipHeight; // 97.5%
        const shipLeft = shipPosition - shipWidth / 2; // Assuming shipPosition is center
        const shipRight = shipPosition + shipWidth / 2;

        // Collision detection
        newAsteroids.forEach((a) => {
          const asteroidBottom = a.top + a.size;
          const asteroidTop = a.top;
          const asteroidLeft = a.left;
          const asteroidRight = a.left + a.size;

          if (
            asteroidBottom > shipTop && // Asteroid bottom is below ship's top
            asteroidTop < shipBottom && // Asteroid top is above ship's bottom
            asteroidRight > shipLeft && // Asteroid right is past ship's left
            asteroidLeft < shipRight // Asteroid left is before ship's right
          ) {
            setGameOver(true);
          }
        });

        return newAsteroids;
      });
      setScore((prev) => prev + 0.1);
    }, 100);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1 && !gameOver) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(gameLoop);
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameOver, shipPosition, gameStarted, timeLeft]);

  const restartGame = () => {
    setGameStarted(false);
    setTimeout(() => startGame(), 100);
  };

  return (
    <div className="game-container">
      {!gameStarted ? (
        <div className="start-screen">
          <h2>Welcome to Space Dodge!</h2>
          <button onClick={startGame}>Start Game</button>
        </div>
      ) : (
        <>
          <h3>
            Space Dodge - Score: {Math.floor(score)} | Time Left:{" "}
            {Math.floor(timeLeft / 60)}m {timeLeft % 60}s
          </h3>
          <div className="game-area" ref={gameAreaRef}>
            {asteroids.map((asteroid) => (
              <div
                key={asteroid.id}
                className="asteroid"
                style={{
                  top: `${asteroid.top}%`,
                  left: `${asteroid.left}%`,
                  width: `${asteroid.size}%`,
                  height: `${asteroid.size}%`,
                  position: "absolute",
                }}
              />
            ))}
            <div
              className="spaceship"
              style={{
                left: `${shipPosition}%`,
                position: "absolute",
              }}
            />
          </div>
          {gameOver && (
            <div className="game-over">
              <h2>Game Over!</h2>
              <p>Final Score: {Math.floor(score)}</p>
              <button onClick={restartGame}>Play Again</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SpaceDodgeGame;
