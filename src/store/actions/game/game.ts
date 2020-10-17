import { GameActionType } from '~/common/enums/enums';
import { GameAC } from '~/common/types/types';

const GameActionCreator: GameAC = {
  incrementStep: () => ({
    type: GameActionType.INCREMENT_STEP,
    payload: {
      incrementStepCount: 1,
    },
  }),
  incrementMistake: () => ({
    type: GameActionType.INCREMENT_MISTAKES,
    payload: {
      incrementMistakeCount: 1,
    },
  }),
  resetGame: () => ({
    type: GameActionType.RESET_GAME,
  }),
};

export { GameActionCreator };
