import { QuestionType } from '~/common/enums/enums';

interface IGenreQuestion {
  answers: IGenreQuestionAnswer[];
  genre: string;
  type: QuestionType.GENRE;
}

interface IGenreQuestionAnswer {
  genre: string;
  src: string;
}

export { IGenreQuestion, IGenreQuestionAnswer };
