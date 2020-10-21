import { GameActionType } from '~/common/enums/enums';

type IncrementStepAction = {
  type: GameActionType.INCREMENT_STEP;
  payload: {
    incrementStepCount: number;
  };
};

type ResetGameAction = {
  type: GameActionType.RESET_GAME;
};

type IncrementMistakeAction = {
  type: GameActionType.INCREMENT_MISTAKES;
  payload: {
    incrementMistakeCount: number;
  };
};

type GameAction =
  | IncrementStepAction
  | ResetGameAction
  | IncrementMistakeAction;

export {
  IncrementStepAction,
  ResetGameAction,
  IncrementMistakeAction,
  GameAction,
};
