import React, { useState, useEffect } from "react";

export const Notification = ({ message, duration = 2500, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setIsClosing(true);
    }, duration - 500);

    const removeTimer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`text-[12px] sm:text-[16px] fixed top-4 right-4 z-50 bg-main px-4 py-2 text-accent shadow-current transition-all ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
    >
      <span>{message}</span>
    </div>
  );
};
