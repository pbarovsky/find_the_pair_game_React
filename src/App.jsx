import { useState } from "react";
import { GamePage } from "./ui/organisms/GamePage";
import { GameOverModal } from "./ui/organisms/GameOverModal";
import { StartPage } from "./ui/organisms/StartPage";
import { EffectTogglers } from "./ui/molecules/EffectTogglers";

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

  return (
    <>
      <EffectTogglers />
      {!isGameStarted && <StartPage onStartGame={startGame} />}
      {isGameStarted && <GamePage onGameOver={endGame} exit={restartGame} />}
      {isGameOver && <GameOverModal onRestart={restartGame} />}
    </>
  );
};

export default App;
