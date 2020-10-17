import { GameActionType } from '~/common/enums/enums';
import {
  IncrementStepAction,
  IncrementMistakeAction,
  ResetGameAction,
} from '~/common/types/types';

const GameActionCreator = {
  incrementStep: (): IncrementStepAction => ({
    type: GameActionType.INCREMENT_STEP,
    payload: {
      incrementStepCount: 1,
    },
  }),
  incrementMistake: (): IncrementMistakeAction => ({
    type: GameActionType.INCREMENT_MISTAKES,
    payload: {
      incrementMistakeCount: 1,
    },
  }),
  resetGame: (): ResetGameAction => ({
    type: GameActionType.RESET_GAME,
  }),
};

export { GameActionCreator };
