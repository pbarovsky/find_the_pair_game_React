import { Game } from "./ui/organisms/Game";
import { Menu } from "./ui/organisms/Menu";
import { EffectTogglers } from "./ui/molecules/EffectTogglers";
import { useState } from "react";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <>
      <EffectTogglers />
      {!isGameStarted && <Menu onStartGame={() => setIsGameStarted(true)} />}
      {isGameStarted && <Game exit={() => setIsGameStarted(false)} />}
    </>
  );
};

export default App;
