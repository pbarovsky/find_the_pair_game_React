import { GameActions } from "./GameActions";
import { INITIAL_STATE } from "./InitialState";

const INITIAL_TIME = 100;
const TIME_PENALTY = 10;
const BONUS_TIME = 15;

const isSlabClickable = (index, state) =>
  state.flippedSlabs.length < 2 &&
  !state.flippedSlabs.includes(index) &&
  !state.matchedSlabs.includes(index);

const calculateNextTime = (round, timeSpent, threshold) => {
  let nextTime = INITIAL_TIME - (round + 1) * TIME_PENALTY;
  return timeSpent < threshold ? nextTime + BONUS_TIME : nextTime;
};

export const gameReducer = (state, action) => {
  const { flippedSlabs, matchedSlabs, round, timeLeft } = state;

  switch (action.type) {
    case GameActions.RESET:
      return { ...INITIAL_STATE, slabs: action.payload.slabs };

    case GameActions.FLIP_SLAB:
      return isSlabClickable(action.payload, state)
        ? { ...state, flippedSlabs: [...flippedSlabs, action.payload] }
        : state;

    case GameActions.MATCH_SLAB:
      return {
        ...state,
        matchedSlabs: [...matchedSlabs, ...flippedSlabs],
        flippedSlabs: [],
      };

    case GameActions.RESET_FLIPPED:
      return { ...state, flippedSlabs: [] };

    case GameActions.NEXT_ROUND: {
      const timeSpent = INITIAL_TIME - timeLeft;
      const threshold = INITIAL_TIME / 2;
      const nextTime = calculateNextTime(round, timeSpent, threshold);

      return {
        ...state,
        round: round + 1,
        slabs: action.payload.slabs,
        flippedSlabs: [],
        matchedSlabs: [],
        timeLeft: nextTime,
      };
    }

    case GameActions.DECREMENT_TIME:
      return { ...state, timeLeft: timeLeft - 1 };

    case GameActions.GAME_OVER:
      return { ...state, timeLeft: 0 };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};
