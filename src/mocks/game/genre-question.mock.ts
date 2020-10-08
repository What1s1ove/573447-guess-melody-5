import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { GenreType, QuestionType } from '~/common/enums/enums';
import { mockedGenreQuestionAnswer } from '~/mocks/game/genre-question-answer.mock';

const mockedGenreQuestion: IGenreQuestion = {
  type: QuestionType.GENRE,
  genre: GenreType.JAZZ,
  answers: [
    {
      genre: GenreType.JAZZ,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      genre: GenreType.TECHNO,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    mockedGenreQuestionAnswer,
  ],
};

export { mockedGenreQuestion };
