import React, { useState } from "react";
import { Button } from "../atoms/Button";
import sc from "./RulesSlider.module.css";

const rules = [
  "В течение раунда Вам нужно находить 2 одинаковых плитки.",
  "Если плитки совпали, они исчезают.",
  "Если не совпали — они закрываются.",
  "На каждый раунд дается 100 секунд.",
  "Каждый раунд время уменьшается на 10 секунд.",
  "Раунд закончится, когда все плитки будут открыты.",
  "Игра продолжается до тех пор, пока таймер не завершится.",
  "Будьте внимательны и запоминайте позиции плиток!",
];

export const RulesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < rules.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={sc.slider__card}>
      <h3 className={sc.slider__title}>Правила игры</h3>
      <div className={sc.slider}>
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0} // Блокировка кнопки, если на первом слайде
        >
          <i className="bi bi-arrow-left-short"></i>
        </Button>
        <div className={sc.rule}>{rules[currentIndex]}</div>
        <Button
          onClick={handleNext}
          disabled={currentIndex === rules.length - 1} // Блокировка кнопки, если на последнем слайде
        >
          <i className="bi bi-arrow-right-short"></i>
        </Button>
      </div>
    </div>
  );
};
