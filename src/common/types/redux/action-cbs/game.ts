import {
  IncrementStepAction,
  IncrementMistakeAction,
  ResetGameAction,
} from '~/common/types/redux/actions/game';

type IncrementStepActionCb = (
  incrementStepCount: number
) => IncrementStepAction;

type IncrementMistakeActionCb = (
  incrementMistakeCount: number
) => IncrementMistakeAction;

type ResetGameActionCb = () => ResetGameAction;

export { IncrementStepActionCb, IncrementMistakeActionCb, ResetGameActionCb };
