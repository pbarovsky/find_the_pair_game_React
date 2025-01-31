import { useReducer, useEffect, useState } from "react";
import { gameReducer } from "../reducers/GameReducer";
import { GameActions } from "../reducers/GameActions";
import { INITIAL_STATE } from "../reducers/InitialState";
import { shuffleImages } from "../shared/shuffleImages";
import { useNotification } from "./useNotification";
import { images } from "../shared/images";

export const useGame = () => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [flashCount, setFlashCount] = useState(0);
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
    }

    const timer = setTimeout(() => {
      dispatch({ type: GameActions.DECREMENT_TIME });
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

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

    setIsCorrect(isMatch);
    setFlashCount((prev) => prev + 1);

    setTimeout(() => {
      dispatch({
        type: isMatch ? GameActions.MATCH_SLAB : GameActions.RESET_FLIPPED,
      });
    }, 500);
  };

  const handleRestart = () => {
    dispatch({
      type: GameActions.RESET,
      payload: { slabs: shuffleImages(images) },
    });
  };

  return {
    state,
    isCorrect,
    flashCount,
    notification,
    notificationClass,
    handleSlabClick,
    handleRestart,
  };
};
