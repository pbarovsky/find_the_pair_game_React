import React, { useState } from "react";
import useSound from "use-sound";
import { useTheme } from "../../hooks/useTheme";
import MUSIC from "../../assets/sounds/sound.mp3";
import sc from "./EffectTogglers.module.css";

import MODE from "../../assets/icons/MODE.svg";
import SOUND_ON from "../../assets/icons/sound_on.svg";
import SOUND_OFF from "../../assets/icons/sound_off.svg";

export const EffectTogglers = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(MUSIC, { loop: true });
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSound = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={sc.togglers}>
      <img
        src={MODE}
        alt="theme switcher"
        className={sc.theme_switcher}
        onClick={toggleTheme}
      />
      <img
        src={isPlaying ? SOUND_ON : SOUND_OFF}
        alt="Sound toggle"
        onClick={toggleSound}
        className={sc.sound_switcher}
      />
    </div>
  );
};
