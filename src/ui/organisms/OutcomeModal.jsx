import { createPortal } from "react-dom";
import { Button } from "../atoms/Button";
import { useState } from "react";

export const OutcomeModal = ({ exit, round, missedPairs }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      exit();
    }, 250);
  };

  return createPortal(
    <div className="fixed inset-0 z-[1000]">
      <div
        className={`absolute inset-0 bg-backdrop transition-opacity duration-500 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 bg-main rounded-[5px] z-[1001] 
        text-center w-[80%] max-w-[400px] p-[20px] shadow-modal h-[400px]
        ${isClosing ? "animate-slide-down" : "animate-slide-up"}`}
      >
        <h2 className="mb-[20px] text-[24px] text-accent text-center font-bold">
          Вы проиграли!
        </h2>
        <h3 className="text-[20px] mb-[10px]">Итоги игры</h3>
        <p className="text-accent">Раунд: {round}</p>
        <p className="text-accent mb-4">Пропущенные пары: {missedPairs}</p>
        <div className="flex flex-row justify-center items-center">
          <Button onClick={handleClose}>В меню</Button>
        </div>
        <p className="mt-[150px] text-[12px] text-accent">design by pbarovsky</p>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
