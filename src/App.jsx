import React, { useState } from "react";
import GamePage from "./components/GamePage";
import GameOverPage from "./components/GameOverPage";
import StartPage from "./components/StartPage";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
    setIsGameStarted(true);
    setIsGameOver(false);
  };

  const endGame = () => setIsGameOver(true);
  
  const restartGame = () => {
    setIsGameStarted(false);
    setIsGameOver(false);
  };

  if (!isGameStarted) return <StartPage onStartGame={startGame} />;
  if (isGameOver) return <GameOverPage onRestart={restartGame} />;
  return <GamePage onGameOver={endGame} />;
};

export default App;
