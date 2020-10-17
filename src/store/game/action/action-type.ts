enum GameActionType {
  INCREMENT_STEP = `INCREMENT_STEP`,
  RESET_GAME = `RESET_GAME`,
  INCREMENT_MISTAKES = `INCREMENT_MISTAKES`,
}

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
  GameActionType,
  IncrementStepAction,
  ResetGameAction,
  IncrementMistakeAction,
  GameAction,
};
