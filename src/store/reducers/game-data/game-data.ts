import { GameDataActionType } from '~/common/enums/enums';
import { GameDataAction, GameQuestion } from '~/common/types/types';

type GameDataState = {
  questions: GameQuestion[];
};

const initialState: GameDataState = {
  questions: [],
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
