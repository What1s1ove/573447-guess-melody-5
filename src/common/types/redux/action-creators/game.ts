import {
  IncrementStepAction,
  IncrementMistakeAction,
  ResetGameAction,
} from '~/common/types/redux/actions/game';
import { GameAnswer, GameQuestion } from '../../game/game';

type IncrementStepAc = () => IncrementStepAction;

type IncrementMistakeAc = (
  question: GameQuestion,
  answer: GameAnswer
) => IncrementMistakeAction;

type ResetGameAc = () => ResetGameAction;

type GameAC = {
  incrementStep: IncrementStepAc;
  incrementMistake: IncrementMistakeAc;
  resetGame: ResetGameAc;
};

export { IncrementStepAc, IncrementMistakeAc, ResetGameAc, GameAC };
