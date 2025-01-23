import React, { useEffect, useState } from "react";

export const Title = () => {
  const text = "FIND A PAIR";
  const letters = text.split("").map((letter) => ({
    letter,
    isAnimated: true,
  }));

  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  useEffect(() => {
    const animateRandomly = () => {
      const count = Math.floor(Math.random() * 4) + 1; // 1–4 букв
      const indexes = [];
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      setAnimatedIndexes(indexes);
    };

    animateRandomly();
    const interval = setInterval(animateRandomly, 1500);
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div
      className="flex justify-center items-center max-h-[200px] h-full max-w-[1000px] w-full text-[20px] 
      font-megatech text-accent sm:text-[30px] sl:text-[40px] lg:text-[55px] xl:text-[70px]"
    >
      {letters.map((item, index) => (
        <div
          key={index}
          className={`inline-block whitespace-pre ${
            animatedIndexes.includes(index) && item.isAnimated
              ? index % 2 === 0
                ? "animate-rotateX"
                : "animate-rotateY"
              : ""
          }`}
        >
          {item.letter === " " ? "\u00A0" : item.letter}
        </div>
      ))}
    </div>
  );
};
