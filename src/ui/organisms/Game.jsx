import { Board } from "../molecules/Board";
import { FooterActions } from "../molecules/FooterActions";
import { Notification } from "../atoms/Notification";
import { StatusBar } from "../molecules/StatusBar";
import { ScreenFlashEffect } from "../atoms/ScreenFlashEffect";
import { OutcomeModal } from "./OutcomeModal";
import { formatTime } from "../../shared/formatTime";
import { useGame } from "../../hooks/useGame";

export const Game = ({ exit }) => {
  const {
    state,
    isCorrect,
    flashCount,
    notification,
    notificationClass,
    handleSlabClick,
    handleRestart,
  } = useGame();

  const {
    round,
    timeLeft,
    missedPairs,
    slabs,
    flippedSlabs,
    matchedSlabs,
    isGameOver,
  } = state;

  return (
    <>
      <ScreenFlashEffect isCorrect={isCorrect} flashCount={flashCount} />
      <div className="flex flex-col justify-start items-center px-[30px] py-0">
        <StatusBar
          round={round}
          timeLeft={formatTime(timeLeft)}
          missedPairs={missedPairs}
        />
        <Board
          slabs={slabs}
          flippedSlabs={flippedSlabs}
          matchedSlabs={matchedSlabs}
          handleSlabClick={handleSlabClick}
        />
        <FooterActions exit={exit} restart={handleRestart} />
        <Notification message={notification} className={notificationClass} />
      </div>
      {isGameOver && (
        <OutcomeModal
          exit={() => {
            handleRestart();
            exit();
          }}
          round={round}
          missedPairs={missedPairs}
        />
      )}
    </>
  );
};
