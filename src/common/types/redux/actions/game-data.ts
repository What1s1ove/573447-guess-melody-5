import { GameDataActionType } from '~/common/enums/enums';
import { GameQuestion } from '../../game/game';

type LoadQuestionsAction = {
  type: GameDataActionType.LOAD_QUESTIONS;
  payload: {
    questions: GameQuestion[];
  };
};

type GameDataAction = LoadQuestionsAction;

export { LoadQuestionsAction, GameDataAction };
