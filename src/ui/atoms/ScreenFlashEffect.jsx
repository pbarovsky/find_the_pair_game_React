import React, { useState, useEffect } from "react";

export const ScreenFlashEffect = ({ isCorrect, flashCount }) => {
  const [flash, setFlash] = useState("");

  useEffect(() => {
    if (flashCount === 0) return;

    setFlash(isCorrect ? "shadow-green_mob md:shadow-green_desk" : "shadow-none");

    const timer = setTimeout(() => {
      setFlash("");
    }, 500);

    return () => clearTimeout(timer);
  }, [flashCount]);

  return (
    <div
      className={`fixed inset-0 transition-all duration-500 ${flash}`}
      style={{ pointerEvents: "none" }}
    />
  );
};
