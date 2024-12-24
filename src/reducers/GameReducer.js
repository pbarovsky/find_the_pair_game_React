import { GameActions } from "./GameActions";
import { INITIAL_STATE } from "./InitialState";

const INITIAL_TIME = 100; // Начальное время в первом раунде
const TIME_PENALTY = 10; // Уменьшение времени за каждый раунд
const MINIMUM_TIME = 10; // Минимальное время раунда

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
      // Вычисляем время для следующего раунда
      const nextTime = Math.max(
        INITIAL_TIME - state.round * TIME_PENALTY,
        MINIMUM_TIME
      );

      return {
        ...state,
        round: state.round + 1, // Увеличиваем номер раунда
        slabs: action.payload.slabs, // Задаем новые плитки
        flippedSlabs: [],
        matchedSlabs: [],
        timeLeft: nextTime, // Обновляем время раунда
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
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
