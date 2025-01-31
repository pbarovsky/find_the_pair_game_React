import CLOCK from "../../assets/icons/clock.svg";
import LOOSE from "../../assets/icons/loose.svg";

export const StatusBar = ({ round, timeLeft, missedPairs }) => {
  return (
    <header className="flex justify-evenly items-center mt-[20px] mb-[20px] sm:mb-[40px] max-w-[580px] w-full text-[16px] sl:text-[30px]">
      <div className="flex sl:gap-[20px] gap-[10px] items-center w-full">
        <div className="widget">lvl: {round}</div>
        <div className="widget gap-[5px] sm:gap-[10px]">
          <img className="w-[20px] h-[20px] sl:w-[30px] sl:h-[30px]" src={CLOCK} lt="clock" style={{ filter: "var(--image)" }} />
          <p className="text-accent">{timeLeft}</p>
        </div>
        <div className="widget">
          <img className="w-[30px] h-[30px] sl:w-[40px] sl:h-[40px]" src={LOOSE} alt="loose" style={{ filter: "var(--image)" }} />
          <p className="text-accent">{missedPairs}</p>
        </div>
      </div>
    </header>
  );
};
