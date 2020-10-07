import { GenreType } from '~/common/enums/enums';
import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';

const generateGenreQuestionAnswer = (
  genre: GenreType
): IGenreQuestionAnswer => ({
  genre,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
});

export { generateGenreQuestionAnswer };
