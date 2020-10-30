import { generateQuestions } from '~/mocks/helpers/helpers';
import { GameConfig, GameDataActionType } from '~/common/enums/enums';
import { GameDataAction, GameQuestion } from '~/common/types/types';

const gameQuestions = generateQuestions(GameConfig.QUESTION_COUNT);

type GameDataState = {
  questions: GameQuestion[];
};

const initialState: GameDataState = {
  questions: gameQuestions,
};

const gameDataReducer = (
  state: GameDataState = initialState,
  action: GameDataAction
): GameDataState => {
  switch (action.type) {
    case GameDataActionType.LOAD_QUESTIONS: {
      const { questions } = action.payload;

      return {
        ...state,
        questions,
      };
    }
  }

  return state;
};

export { gameDataReducer };
