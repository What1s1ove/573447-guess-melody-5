import { generateQuestions } from '~/mocks/helpers/helpers';
import { GameActionType, GameConfig } from '~/common/enums/enums';
import { GameAction, GameQuestion } from '~/common/types/types';

const questions = generateQuestions(GameConfig.QUESTION_COUNT);

type GameState = {
  questions: GameQuestion[];
  step: number;
  mistakesCount: number;
};

const initialState: GameState = {
  questions,
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
