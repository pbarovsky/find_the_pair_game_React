import React, { useState, useEffect } from "react";
import Slab from "./Slab";
import { shuffleColors } from "../utils/shuffleColors";
import colors from "../utils/colors";
import { formatTime } from "../utils/formatTime";
import sc from "./GamePage.module.css";

const INITIAL_TIME = 100;

const GamePage = ({ onGameOver }) => {
  const [slabs, setSlabs] = useState(shuffleColors(colors));
  const [flippedSlabs, setFlippedSlabs] = useState([]);
  const [matchedSlabs, setMatchedSlabs] = useState([]);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [round, setRound] = useState(1);

  // Отображение времени
  useEffect(() => {
    if (timeLeft <= 0) {
      onGameOver();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onGameOver]);

  // Проверка завершения раунда
  useEffect(() => {
    if (matchedSlabs.length === slabs.length) {
      setRound((prev) => prev + 1);
      setSlabs(shuffleColors(colors));
      setFlippedSlabs([]);
      setMatchedSlabs([]);
      setTimeLeft(INITIAL_TIME);
    }
  }, [matchedSlabs, slabs]);

  // Обработка кликов
  const handleSlabClick = (index) => {
    if (
      flippedSlabs.length === 2 || // Уже выбраны две плитки
      flippedSlabs.includes(index) || // Плитка уже перевернута
      matchedSlabs.includes(index) // Плитка угадана
    ) {
      return;
    }

    const newFlippedSlabs = [...flippedSlabs, index];
    setFlippedSlabs(newFlippedSlabs);

    // Проверяем пару
    if (newFlippedSlabs.length === 2) {
      const [first, second] = newFlippedSlabs;
      if (slabs[first] === slabs[second]) {
        setMatchedSlabs((prev) => [...prev, first, second]);
      }
      setTimeout(() => setFlippedSlabs([]), 500); // сброс перевернутых плиток
    }
  };

  return (
    <div>
      <header className={sc["game-header"]}>
        <div className={sc.game_titles}>
          Раунд: <b className={sc.game_round}>{round}</b>
        </div>
        <div className={sc.game_titles}>
          Осталось: <b className={sc.game_time}>{formatTime(timeLeft)}</b>
        </div>
      </header>
      <section className={sc["game-board"]}>
        {slabs.map((color, index) => (
          <Slab
            key={index}
            color={color}
            isFlipped={flippedSlabs.includes(index)}
            isMatched={matchedSlabs.includes(index)}
            onClick={() => handleSlabClick(index)}
          />
        ))}
      </section>
    </div>
  );
};

export default GamePage;
