import React, { useState, useEffect, useRef } from "react";
import "../index.css"; // Ensure this points to your CSS file

const SpaceDodgeGame = () => {
  const [shipPosition, setShipPosition] = useState(50);
  const [asteroids, setAsteroids] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);
  const [explosion, setExplosion] = useState(null);
  const gameAreaRef = useRef(null);

  // Refs to access current values without triggering effect re-runs
  const shipPositionRef = useRef(shipPosition);
  const timeLeftRef = useRef(timeLeft);
  const gameOverRef = useRef(gameOver);

  // Keep refs in sync with state
  useEffect(() => {
    shipPositionRef.current = shipPosition;
  }, [shipPosition]);

  useEffect(() => {
    timeLeftRef.current = timeLeft;
  }, [timeLeft]);

  useEffect(() => {
    gameOverRef.current = gameOver;
  }, [gameOver]);

  // Handle ship movement with arrow keys
  const handleKeyDown = (e) => {
    if (gameOverRef.current) return;
    if (e.key === "ArrowLeft" && shipPositionRef.current > 5) {
      setShipPosition((prev) => prev - 5);
    } else if (e.key === "ArrowRight" && shipPositionRef.current < 95) {
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
    setExplosion(null);
    // Scroll to game area to ensure visibility
    if (gameAreaRef.current) {
      gameAreaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Collision detection helper - uses pixel-based detection
  const checkCollision = (asteroidList, currentShipPosition) => {
    if (!gameAreaRef.current) return { hit: false };

    const gameArea = gameAreaRef.current;
    const gameHeight = gameArea.offsetHeight;
    const gameWidth = gameArea.offsetWidth;

    // Ship dimensions (from CSS: width 50px, height 50px, bottom 10px)
    const shipWidthPx = 50;
    const shipHeightPx = 50;
    const shipBottomPx = 10;

    // Convert ship position to pixels (shipPosition is center %)
    const shipCenterPx = (currentShipPosition / 100) * gameWidth;
    const shipLeftPx = shipCenterPx - shipWidthPx / 2;
    const shipRightPx = shipCenterPx + shipWidthPx / 2;
    const shipTopPx = gameHeight - shipBottomPx - shipHeightPx;
    const shipBottomEdgePx = gameHeight - shipBottomPx;

    // Shrink hitbox slightly for more forgiving collision (80% of actual size)
    const hitboxPadding = 10;
    const shipHitLeft = shipLeftPx + hitboxPadding;
    const shipHitRight = shipRightPx - hitboxPadding;
    const shipHitTop = shipTopPx + hitboxPadding;
    const shipHitBottom = shipBottomEdgePx - hitboxPadding;

    for (const a of asteroidList) {
      // Asteroid dimensions (size is in % of game area)
      const asteroidTopPx = (a.top / 100) * gameHeight;
      const asteroidLeftPx = (a.left / 100) * gameWidth;
      const asteroidSizePx = (a.size / 100) * Math.min(gameWidth, gameHeight);

      const asteroidBottomPx = asteroidTopPx + asteroidSizePx;
      const asteroidRightPx = asteroidLeftPx + asteroidSizePx;

      // AABB collision detection
      if (
        asteroidBottomPx > shipHitTop &&
        asteroidTopPx < shipHitBottom &&
        asteroidRightPx > shipHitLeft &&
        asteroidLeftPx < shipHitRight
      ) {
        // Return collision info for explosion position
        return {
          hit: true,
          x: (asteroidLeftPx + asteroidSizePx / 2) / gameWidth * 100,
          y: (asteroidTopPx + asteroidSizePx / 2) / gameHeight * 100
        };
      }
    }
    return { hit: false };
  };

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameLoop = setInterval(() => {
      if (gameOverRef.current) return;

      setAsteroids((prev) => {
        const elapsedTime = 600 - timeLeftRef.current;
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

        // Check collision after updating asteroid positions
        const collision = checkCollision(newAsteroids, shipPositionRef.current);
        if (collision.hit) {
          setExplosion({ x: collision.x, y: collision.y });
          setGameOver(true);
        }

        return newAsteroids;
      });
      setScore((prev) => prev + 0.1);
    }, 100);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1 && !gameOverRef.current) {
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
  }, [gameStarted, gameOver]);

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
              className={`spaceship ${explosion ? "hidden" : ""}`}
              style={{
                left: `${shipPosition}%`,
                position: "absolute",
              }}
            />
            {explosion && (
              <div
                className="explosion"
                style={{
                  left: `${shipPosition}%`,
                  bottom: "10px",
                  position: "absolute",
                }}
              />
            )}
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
