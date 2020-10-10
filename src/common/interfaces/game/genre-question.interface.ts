import { IGenreQuestionAnswer } from '~/common/interfaces/game/genre-question-answer.interface';
import { QuestionType } from '~/common/enums/enums';

interface IGenreQuestion {
  type: QuestionType.GENRE;
  genre: string;
  answers: IGenreQuestionAnswer[];
}

export { IGenreQuestion };
