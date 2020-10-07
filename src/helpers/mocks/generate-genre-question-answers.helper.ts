import { generateGenreQuestionAnswer } from '~/helpers/mocks/generate-genre-question-answer.helper';
import { GenreType } from '~/common/enums/enums';
import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';

const generateGenreQuestionAnswers = (
  genres: GenreType[]
): IGenreQuestionAnswer[] => {
  const genreQuestionAnswers = genres.map((genre) => {
    const genreQuestionAnswer = generateGenreQuestionAnswer(genre);

    return genreQuestionAnswer;
  });

  return genreQuestionAnswers;
};

export { generateGenreQuestionAnswers };
