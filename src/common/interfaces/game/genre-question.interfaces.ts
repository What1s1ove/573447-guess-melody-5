import { QuestionType } from '~/common/enums/enums';

interface IGenreQuestion {
  id: string;
  type: QuestionType.GENRE;
  genre: string;
  answers: IGenreQuestionAnswer[];
}

interface IGenreQuestionAnswer {
  genre: string;
  src: string;
}

export { IGenreQuestion, IGenreQuestionAnswer };
