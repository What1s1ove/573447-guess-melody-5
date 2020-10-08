import {
  IArtistQuestion,
  IArtistQuestionAnswer,
} from '~/common/interfaces/interfaces';

type AnswerArtistQuestionCb = (
  question: IArtistQuestion,
  answer: IArtistQuestionAnswer
) => void;

export { AnswerArtistQuestionCb };
