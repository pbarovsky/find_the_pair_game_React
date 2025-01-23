import { GameActions } from "./GameActions";
import { INITIAL_STATE } from "./InitialState";

const INITIAL_TIME = 100;
const TIME_PENALTY = 10;
const MINIMUM_TIME = 10;

export const gameReducer = (state, action) => {
  switch (action.type) {
    case GameActions.RESET:
      return {
        ...INITIAL_STATE,
        slabs: action.payload.slabs,
      };

    case GameActions.FLIP_SLAB:
      if (
        state.flippedSlabs.length >= 2 ||
        state.flippedSlabs.includes(action.payload) ||
        state.matchedSlabs.includes(action.payload)
      ) {
        return state;
      }
      return {
        ...state,
        flippedSlabs: [...state.flippedSlabs, action.payload],
      };

    case GameActions.MATCH_SLAB:
      return {
        ...state,
        matchedSlabs: [...state.matchedSlabs, ...state.flippedSlabs],
        flippedSlabs: [],
      };

    case GameActions.RESET_FLIPPED:
      return {
        ...state,
        flippedSlabs: [],
      };

    case GameActions.NEXT_ROUND: {
      const nextTime = Math.max(INITIAL_TIME - state.round * TIME_PENALTY, MINIMUM_TIME);

      return {
        ...state,
        round: state.round + 1,
        slabs: action.payload.slabs,
        flippedSlabs: [],
        matchedSlabs: [],
        timeLeft: nextTime,
      };
    }

    case GameActions.DECREMENT_TIME:
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };

    case GameActions.GAME_OVER:
      return {
        ...state,
        timeLeft: 0,
      };

    default:
      throw new Error(`Неизвестный дип action: ${action.type}`);
  }
};
