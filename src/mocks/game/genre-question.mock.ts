import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';
import { mockedGenreQuestionAnswer } from '~/mocks/game/genre-question-answer.mock';

const mockedGenreQuestion: IGenreQuestion = {
  answers: [
    {
      genre: `jazz`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    {
      genre: `techno`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    mockedGenreQuestionAnswer,
  ],
  genre: `jazz`,
  id: `1`,
  type: QuestionType.GENRE,
};

export { mockedGenreQuestion };
