import { useState } from "react";
import { Button } from "../atoms/Button";

const rules = [
  "В течение раунда Вам нужно находить по 2 одинаковых плитки.",
  "Если плитки совпали - они исчезают.",
  "Если не совпали — они закрываются.",
  "На первый раунд даётся 100 секунд.",
  "Каждый следующий раунд короче предыдущего на 10 секунд.",
  "Завершите раунд менее чем за 50% времени - получите +20 секунд.",
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
    <div className="flex flex-col items-center mt-[50px] max-w-[600px] w-[90%] justify-center">
      <h3 className="text-[20px] sl:text-[25px] font-bold text-center">
        Правила игры
      </h3>
      <div className="flex flex-row items-center max-w-[600px] w-full max-h-[200px] min-h-[100px] h-full mx-auto my-0 justify-around">
        <Button onClick={handlePrevious} disabled={currentIndex === 0}>
          <i className="bi bi-arrow-left-short"></i>
        </Button>
        <div className="flex items-center text-[14px] sl:text-[20px] text-accent max-w-[400px] min-w-[150px] w-full py-0 px-[20px] text-center min-h-[150px] h-full">
          {rules[currentIndex]}
        </div>
        <Button
          onClick={handleNext}
          disabled={currentIndex === rules.length - 1}
        >
          <i className="bi bi-arrow-right-short"></i>
        </Button>
      </div>
    </div>
  );
};
