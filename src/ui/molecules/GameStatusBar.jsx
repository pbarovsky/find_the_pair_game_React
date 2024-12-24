import Button from "../atoms/Button";
import sc from "./GameStatusBar.module.css";

import CLOCK from "../../assets/icons/clock.svg";

const GameStatusBar = ({ round, timeLeft, exit }) => {
  return (
    <header className={sc["game-header"]}>
      <div className={sc.game_status}>
        <div className={sc.title_round}>{round}</div>
        <div className={sc.title_time}>
          <img src={CLOCK} alt="clock" className={sc.clock_icon}/>
          <p className={sc.time}>{timeLeft}</p>
        </div>
      </div>
      <Button onClick={exit}>Выход</Button>
    </header>
  );
};

export default GameStatusBar;
