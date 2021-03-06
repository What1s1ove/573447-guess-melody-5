import { GameActionType } from '~/common/enums/enums';
import { GameAction } from '~/common/types/types';

type GameState = {
  step: number;
  mistakesCount: number;
};

const initialState: GameState = {
  step: 0,
  mistakesCount: 0,
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
      const updatedMistakesCount = state.mistakesCount + incrementMistakeCount;

      return {
        ...state,
        mistakesCount: updatedMistakesCount,
      };
    }
    case GameActionType.RESET_GAME: {
      return initialState;
    }
  }

  return state;
};

export { gameReducer };
