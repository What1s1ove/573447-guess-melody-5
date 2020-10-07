import { IGenreQuestionAnswer } from '~/common/interfaces/game/genre-question-answer.interface';
import { GenreType, QuestionType } from '~/common/enums/enums';

interface IGenreQuestion {
  type: QuestionType.GENRE;
  genre: GenreType;
  answers: IGenreQuestionAnswer[];
}

export { IGenreQuestion };
