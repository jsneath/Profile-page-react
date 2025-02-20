import React, { useState, useEffect } from "react";
import "../index.css";

const SpaceDodgeGame = () => {
  const [shipPosition, setShipPosition] = useState(50); // Ship starts in the middle (percentage)
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false); // Track if game has started
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes timer in seconds

  // Handle ship movement with arrow keys
  const handleKeyDown = (e) => {
    if (gameOver) return;
    if (e.key === "ArrowLeft" && shipPosition > 5) {
      setShipPosition((prev) => prev - 5);
    } else if (e.key === "ArrowRight" && shipPosition < 95) {
      setShipPosition((prev) => prev + 5);
    }
  };

  // Generate new asteroids with size in percentage
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

  // Start the game (initialize asteroids and timer)
  const startGame = () => {
    setGameStarted(true);
    setAsteroids([]); // Start with no asteroids
    setScore(0);
    setGameOver(false);
    setTimeLeft(600); // Reset timer to 10 minutes
    setShipPosition(50);
  };

  // Game loop for asteroids and score
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      setAsteroids((prev) => {
        // Calculate elapsed time in seconds (600 - timeLeft)
        const elapsedTime = 600 - timeLeft;
        // Increase difficulty: base speed 3.0, plus 0.01 per second elapsed (max 9.0 at 10 min)
        const asteroidSpeed = Math.min(3.0 + elapsedTime * 0.01, 9.0);
        // Increase spawn rate: base 0.15, plus 0.0005 per second (max 0.45 at 10 min)
        const spawnRate = Math.min(0.15 + elapsedTime * 0.0005, 0.45);

        const newAsteroids = prev
          .map((a) => ({
            ...a,
            top: a.top + asteroidSpeed, // Speed increases over time
          }))
          .filter((a) => a.top < 120); // Allow asteroids to move off-screen

        // Spawn asteroids with increasing frequency
        if (Math.random() < spawnRate) {
          newAsteroids.push(spawnAsteroid());
          // 50% chance to spawn a second asteroid
          if (Math.random() < 0.5) {
            newAsteroids.push(spawnAsteroid());
          }
        }

        // Check collision with consistent percentage units
        const shipBottom = 90; // Spaceship top at 90%
        const shipLeft = shipPosition - 5;
        const shipRight = shipPosition + 5;

        newAsteroids.forEach((a) => {
          if (
            a.top + a.size > shipBottom && // Asteroid bottom passes ship's top
            a.top < 100 && // Asteroid top hasn't passed bottom
            a.left + a.size / 2 > shipLeft && // Asteroid center overlaps ship horizontally
            a.left + a.size / 2 < shipRight
          ) {
            setGameOver(true);
          }
        });

        return newAsteroids;
      });
      // Increase score gradually (1 point per second)
      setScore((prev) => prev + 0.1); // 0.1 per 100ms = 1 point/second
    }, 100); // 100ms interval

    // Timer for 10-minute duration
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1 && !gameOver) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      clearInterval(gameLoop);
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameOver, shipPosition, gameStarted, timeLeft]); // Added timeLeft as dependency

  const restartGame = () => {
    setGameStarted(false);
    setTimeout(() => startGame(), 100); // Small delay to reset state
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
          <div className="game-area">
            {asteroids.map((asteroid) => (
              <div
                key={asteroid.id}
                className="asteroid"
                style={{
                  top: `${asteroid.top}%`,
                  left: `${asteroid.left}%`,
                  width: `${asteroid.size}%`,
                  height: `${asteroid.size}%`,
                }}
              />
            ))}
            <div className="spaceship" style={{ left: `${shipPosition}%` }} />
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
