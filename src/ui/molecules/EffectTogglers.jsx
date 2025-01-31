import { useState } from "react";
import { Howl } from "howler";
import { useTheme } from "../../hooks/useTheme";
import MUSIC from "../../assets/sounds/sound.mp3";
import SUN from "../../assets/icons/sun.svg";
import MOON from "../../assets/icons/moon.svg";
import SOUND_ON from "../../assets/icons/sound_on.svg";
import SOUND_OFF from "../../assets/icons/sound_off.svg";

export const EffectTogglers = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleSound = () => {
    if (!isPlaying) {
      const newSound = new Howl({
        src: [MUSIC],
        loop: true,
      });
      newSound.play();
      setSound(newSound);
      setIsPlaying(true);
    } else {
      sound.stop();
      setIsPlaying(false);
    }
  };

  return (
    <div className="gap-[10px] flex mt-[10px] ml-[10px] mb-[10px]">
      <img
        src={theme === "light" ? SUN : MOON}
        alt="theme switcher"
        className="cursor-pointer"
        style={{ filter: "var(--image)" }}
        onClick={toggleTheme}
      />
      <img
        src={isPlaying ? SOUND_ON : SOUND_OFF}
        alt="Sound toggle"
        onClick={toggleSound}
        className="cursor-pointer"
        style={{ filter: "var(--image)" }}
      />
    </div>
  );
};
