import * as React from 'react';
import {
  IArtistQuestion,
  IGenreQuestion,
  IArtistQuestionAnswer,
  IGenreQuestionAnswer,
} from '~/common/interfaces/interfaces';

type GameQuestion = IGenreQuestion | IArtistQuestion;

type GameAnswer = IGenreQuestionAnswer[] | IArtistQuestionAnswer;

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

type RenderPlayerCb = (src: string, playerId: number) => React.ReactElement;

export {
  GameQuestion,
  GameAnswer,
  AnswerArtistQuestionCb,
  ChangeArtistQuestionAnswerCb,
  AnswerGenreQuestionCb,
  ChangeGenreQuestionAnswerCb,
  RenderPlayerCb,
};
