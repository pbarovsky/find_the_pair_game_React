import React, { useReducer, useEffect } from "react";
import { Board } from "../molecules/Board";
import { gameReducer } from "../../reducers/GameReducer";
import { GameActions } from "../../reducers/GameActions";
import { INITIAL_STATE } from "../../reducers/InitialState";
import { shuffleImages } from "../../utils/shuffleImages";
import { formatTime } from "../../utils/formatTime";
import { GameStatusBar } from "../molecules/GameStatusBar";
import { images } from "../../utils/images";
import { Notification } from "../atoms/Notification";
import { useNotification } from "../../hooks/useNotification";

export const GamePage = ({ onGameOver, exit }) => {
  const { notification, notificationClass, showNotification } =
    useNotification();
  const [state, dispatch] = useReducer(gameReducer, {
    ...INITIAL_STATE,
    slabs: shuffleImages(images),
  });

  const { slabs, flippedSlabs, matchedSlabs, timeLeft, round } = state;

  useEffect(() => {
    if (timeLeft <= 0) {
      dispatch({ type: GameActions.GAME_OVER });
      onGameOver();
      return;
    }

    const timer = setTimeout(
      () => dispatch({ type: GameActions.DECREMENT_TIME }),
      1000
    );
    return () => clearTimeout(timer);
  }, [timeLeft, onGameOver]);

  useEffect(() => {
    if (matchedSlabs.length === slabs.length) {
      handleRoundCompletion();
    }
  }, [matchedSlabs, slabs, state.timeLeft]);

  const handleSlabClick = (index) => {
    if (
      flippedSlabs.length === 2 ||
      flippedSlabs.includes(index) ||
      matchedSlabs.includes(index)
    ) {
      return;
    }

    dispatch({ type: GameActions.FLIP_SLAB, payload: index });

    if (flippedSlabs.length === 1) {
      handleSlabMatch(index);
    }
  };

  const handleRoundCompletion = () => {
    const timeSpent = INITIAL_STATE.timeLeft - state.timeLeft;
    const threshold = INITIAL_STATE.timeLeft / 2;

    if (timeSpent < threshold) {
      showNotification("Бонус +20 секунд!", 3000);
    }

    dispatch({
      type: GameActions.NEXT_ROUND,
      payload: { slabs: shuffleImages(images) },
    });
  };

  const handleSlabMatch = (index) => {
    const [first] = flippedSlabs;
    const isMatch = slabs[first] === slabs[index];

    if (isMatch) {
      setTimeout(() => {
        dispatch({ type: GameActions.MATCH_SLAB, payload: [first, index] });
      }, 500);
    } else {
      setTimeout(() => {
        dispatch({ type: GameActions.RESET_FLIPPED });
      }, 500);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center px-[30px] py-0">
      <GameStatusBar
        round={round}
        timeLeft={formatTime(timeLeft)}
        exit={exit}
      />
      <Board
        slabs={slabs}
        flippedSlabs={flippedSlabs}
        matchedSlabs={matchedSlabs}
        handleSlabClick={handleSlabClick}
      />
      <Notification message={notification} className={notificationClass} />
    </div>
  );
};
