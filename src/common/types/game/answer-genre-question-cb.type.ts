import { IGenreQuestion } from '~/common/interfaces/interfaces';

type AnswerGenreQuestionCb = (
  question: IGenreQuestion,
  answers: boolean[]
) => void;

export { AnswerGenreQuestionCb };
