import * as React from 'react';
import {
  IArtistQuestion,
  IGenreQuestion,
  IArtistQuestionAnswer,
} from '~/common/interfaces/interfaces';

type GenreQuestionUserAnswers = boolean[];

type GameQuestion = IGenreQuestion | IArtistQuestion;

type GameAnswer = GenreQuestionUserAnswers | IArtistQuestionAnswer;

type AnswerArtistQuestionCb = (
  question: IArtistQuestion,
  answer: IArtistQuestionAnswer
) => void;

type ChangeArtistQuestionAnswerCb = (answer: IArtistQuestionAnswer) => void;

type AnswerGenreQuestionCb = (
  question: IGenreQuestion,
  answers: GenreQuestionUserAnswers
) => void;

type ChangeGenreQuestionAnswerCb = (
  answerIdx: number,
  isChecked: boolean
) => void;

type UserAnswerCb = (question: GameQuestion, answer: GameAnswer) => void;

type RenderPlayerCb = (src: string, playerId: number) => React.ReactElement;

export {
  GameQuestion,
  GameAnswer,
  GenreQuestionUserAnswers,
  AnswerArtistQuestionCb,
  ChangeArtistQuestionAnswerCb,
  AnswerGenreQuestionCb,
  ChangeGenreQuestionAnswerCb,
  UserAnswerCb,
  RenderPlayerCb,
};
