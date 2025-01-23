import { Button } from "../atoms/Button";
import CLOCK from "../../assets/icons/clock.svg";

export const GameStatusBar = ({ round, timeLeft, exit }) => {
  return (
    <header className="flex flex-row mt-[20px] mb-[40px] items-center max-w-[580px] w-full justify-between">
      <div className="flex sl:gap-[20px] gap-[10px] items-center">
        <div
          className="
        flex items-center justify-center border-[4px] border-solid border-accent text-[16px] w-[53px] h-[40px]
        sm:border-[7px] sm:text-[30px] sm:w-[69px] sm:h-[69px]
        "
        >
          {round}
        </div>
        <div className="flex items-center max-w-[150px] w-full gap-[10px]">
          <img
            src={CLOCK}
            alt="clock"
            style={{ filter: "var(--image)" }}
            className="w-[40px] h-[40px] sm:h-[69px] sm:w-[69px]"
          />
          <p className="text-[16px] sm:text-[30px] text-accent">{timeLeft}</p>
        </div>
      </div>
      <Button onClick={exit}>Выход</Button>
    </header>
  );
};
