import React, { useReducer, useEffect } from "react";
import { Slab } from "../atoms/Slab";
import { gameReducer } from "../../reducers/GameReducer";
import { GameActions } from "../../reducers/GameActions";
import { INITIAL_STATE } from "../../reducers/InitialState";
import { shuffleImages } from "../../utils/shuffleImages";
import { formatTime } from "../../utils/formatTime";
import { GameStatusBar } from "../molecules/GameStatusBar";
import { images } from "../../utils/images";
import sc from "./GamePage.module.css";

export const GamePage = ({ onGameOver, exit }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    ...INITIAL_STATE,
    slabs: shuffleImages(images),
  });

  const { slabs, flippedSlabs, matchedSlabs, timeLeft, round } = state;

  // Таймер
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

  // Переход на следующий раунд
  useEffect(() => {
    if (matchedSlabs.length === slabs.length) {
      dispatch({
        type: GameActions.NEXT_ROUND,
        payload: { slabs: shuffleImages(images) },
      });
    }
  }, [matchedSlabs, slabs]);

  // Обработка кликов по плиткам
  const handleSlabClick = (index) => {
    if (
      flippedSlabs.length === 2 || // Уже выбраны две плитки
      flippedSlabs.includes(index) || // Плитка уже перевернута
      matchedSlabs.includes(index) // Плитка угадана
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
    <div className={sc.game__container}>
      <GameStatusBar
        round={round}
        timeLeft={formatTime(timeLeft)}
        exit={exit}
      />
      <div className={sc["game-board"]}>
        {slabs.map((image, index) => (
          <Slab
            key={index}
            image={image}
            isFlipped={flippedSlabs.includes(index)}
            isMatched={matchedSlabs.includes(index)}
            onClick={() => handleSlabClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
