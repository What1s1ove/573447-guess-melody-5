import { QuestionType } from '~/common/enums/enums';

interface IGenreQuestion {
  type: QuestionType.GENRE;
  genre: string;
  answers: IGenreQuestionAnswer[];
}

interface IGenreQuestionAnswer {
  genre: string;
  src: string;
}

export { IGenreQuestion, IGenreQuestionAnswer };
