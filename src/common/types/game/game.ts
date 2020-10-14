import {
  IArtistQuestion,
  IGenreQuestion,
  IArtistQuestionAnswer,
} from '~/common/interfaces/interfaces';

type GameQuestion = IGenreQuestion | IArtistQuestion;

type AnswerArtistQuestionCb = (
  question: IArtistQuestion,
  answer: IArtistQuestionAnswer
) => void;

type ChangeArtistQuestionAnswerCb = (answer: IArtistQuestionAnswer) => void;

type AnswerGenreQuestionCb = (
  question: IGenreQuestion,
  answers: boolean[]
) => void;

type ChangeGenreQuestionAnswerCb = (
  answerIdx: number,
  isChecked: boolean
) => void;

type RenderPlayerCb = (src: string, playerId: number) => JSX.Element;

export {
  GameQuestion,
  AnswerArtistQuestionCb,
  ChangeArtistQuestionAnswerCb,
  AnswerGenreQuestionCb,
  ChangeGenreQuestionAnswerCb,
  RenderPlayerCb,
};
