import { GameAction, GameActionType } from '../action/action-type';

type GameState = {
  step: number;
  mistakes: number;
};

const initialState: GameState = {
  step: 0,
  mistakes: 0,
};

const gameReducer = (
  state: GameState = initialState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case GameActionType.INCREMENT_STEP: {
      const { incrementStepCount } = action.payload;

      return {
        ...state,
        step: state.step + incrementStepCount,
      };
    }
    case GameActionType.INCREMENT_MISTAKES: {
      const { incrementMistakeCount } = action.payload;

      return {
        ...state,
        mistakes: state.mistakes + incrementMistakeCount,
      };
    }
  }

  return state;
};

export { GameState, gameReducer };
