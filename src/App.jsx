import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import GamePage from "./ui/organisms/GamePage";
import GameOverModal from "./ui/organisms/GameOverModal";
import StartPage from "./ui/organisms/StartPage";
import './App.css'

import DARK from "./assets/icons/MOON.svg";
import LIGHT from './assets/icons/SUN.svg'

const App = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

  return (
    <div className="App">
      <img
        src={theme === "light" ? LIGHT : DARK}
        alt="theme switcher"
        className="theme_switcher"
        onClick={toggleTheme}
      />

      {!isGameStarted && <StartPage onStartGame={startGame} />}
      {isGameStarted && <GamePage onGameOver={endGame} exit={restartGame} />}
      {isGameOver && <GameOverModal onRestart={restartGame} />}
    </div>
  );
};

export default App;
