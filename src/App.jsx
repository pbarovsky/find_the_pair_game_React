import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import useSound from "use-sound";
import GamePage from "./ui/organisms/GamePage";
import GameOverModal from "./ui/organisms/GameOverModal";
import StartPage from "./ui/organisms/StartPage";
import "./App.css";

import MODE from "./assets/icons/MODE.svg";
import SOUND_ON from "./assets/icons/sound_on.svg";
import SOUND_OFF from "./assets/icons/sound_off.svg";
import MUSIC from "./assets/sounds/sound.mp3";

const App = () => {
  const { theme, setTheme } = useTheme();
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(MUSIC, {loop: true});

  const toggleSound = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

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
    <>
      <div className="togglers">
        <img
          src={MODE}
          alt="theme switcher"
          className="theme_switcher"
          onClick={toggleTheme}
        />
        <img
          src={isPlaying ? SOUND_ON : SOUND_OFF}
          alt="Sound toggle"
          onClick={() => toggleSound()}
          className="sound_switcher"
        />
      </div>

      {!isGameStarted && <StartPage onStartGame={startGame} />}
      {isGameStarted && <GamePage onGameOver={endGame} exit={restartGame} />}
      {isGameOver && <GameOverModal onRestart={restartGame} />}
    </>
  );
};

export default App;
