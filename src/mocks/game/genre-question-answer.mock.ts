import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';
import { GenreType } from '~/common/enums/enums';

const mockedGenreQuestionAnswer: IGenreQuestionAnswer = {
  genre: GenreType.POP,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
};

export { mockedGenreQuestionAnswer };
