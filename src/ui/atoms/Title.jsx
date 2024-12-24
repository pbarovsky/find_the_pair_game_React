import React, { useEffect, useState } from "react";
import sc from "./Title.module.css";

const Title = () => {
  const text = "FIND A PAIR";
  const letters = text.split("").map(letter => ({ letter, isAnimated: true }));

  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  // Функция случайного выбора индексов для анимации
  useEffect(() => {
    const animateRandomly = () => {
      const count = Math.floor(Math.random() * 4) + 1; // От 1 до 4 букв
      const indexes = [];
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      setAnimatedIndexes(indexes); // Убираем дубликаты
    };

    animateRandomly();
    const interval = setInterval(animateRandomly, 1500); // Запуск каждые 3 секунды
    return () => clearInterval(interval); // Очищаем таймер при размонтировании
  }, [letters.length]);

  return (
    <div className={sc["text-container"]}>
      {letters.map((item, index) => (
        <div
          key={index}
          className={`${sc.letter} ${
            animatedIndexes.includes(index) && item.isAnimated ? sc["animated-letter"] : ""
          }`}
        >
          {item.letter === " " ? "\u00A0" : item.letter}
        </div>
      ))}
    </div>
  );
};

export default Title;
