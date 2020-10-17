import { GameActionType } from '~/common/enums/enums';
import { GameAction } from '~/common/types/types';

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
    case GameActionType.RESET_GAME: {
      return {
        ...state,
        ...initialState,
      };
    }
  }

  return state;
};

export { GameState, gameReducer };
