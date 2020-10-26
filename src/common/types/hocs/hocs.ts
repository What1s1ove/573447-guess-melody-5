import {
  ChangeGenreQuestionAnswerCb,
  GenreQuestionUserAnswers,
  RenderPlayerCb,
} from '~/common/types/game/game';
import { FormSubmitCb } from '~/common/types/event/event';

type WithActivePlayer = {
  renderPlayer: RenderPlayerCb;
};

type WithAudio = {
  isLoading: boolean;
};

type WithUserAnswers = {
  userAnswers: GenreQuestionUserAnswers;
  onAnswerChange: ChangeGenreQuestionAnswerCb;
  onUserAnswer: FormSubmitCb;
};

export { WithActivePlayer, WithAudio, WithUserAnswers };
