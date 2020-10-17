import {
  IncrementStepAction,
  IncrementMistakeAction,
  ResetGameAction,
} from '~/common/types/redux/actions/game';

type IncrementStepAc = () => IncrementStepAction;

type IncrementMistakeAc = () => IncrementMistakeAction;

type ResetGameAc = () => ResetGameAction;

type GameAC = {
  incrementStep: IncrementStepAc;
  incrementMistake: IncrementMistakeAc;
  resetGame: ResetGameAc;
};

export { IncrementStepAc, IncrementMistakeAc, ResetGameAc, GameAC };
