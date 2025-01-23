import React, { useReducer, useEffect, useState } from "react";
import { Board } from "../molecules/Board";
import { gameReducer } from "../../reducers/GameReducer";
import { GameActions } from "../../reducers/GameActions";
import { INITIAL_STATE } from "../../reducers/InitialState";
import { shuffleImages } from "../../utils/shuffleImages";
import { formatTime } from "../../utils/formatTime";
import { GameStatusBar } from "../molecules/GameStatusBar";
import { Notification } from "../atoms/Notification";
import { images } from "../../utils/images";

export const GamePage = ({ onGameOver, exit }) => {
  const [notification, setNotification] = useState(null);
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
      const timeSpent = INITIAL_STATE.timeLeft - state.timeLeft;
      const threshold = INITIAL_STATE.timeLeft / 2;

      if (timeSpent < threshold) {
        setNotification("Бонус +15 секунд!");
        setTimeout(() => setNotification(null), 2500);
      }

      dispatch({
        type: GameActions.NEXT_ROUND,
        payload: { slabs: shuffleImages(images) },
      });
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
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};
