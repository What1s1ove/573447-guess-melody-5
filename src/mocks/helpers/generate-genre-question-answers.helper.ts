import { generateGenreQuestionAnswer } from '~/mocks/helpers/generate-genre-question-answer.helper';
import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';

const generateGenreQuestionAnswers = (
  genres: string[]
): IGenreQuestionAnswer[] => {
  const genreQuestionAnswers = genres.map((genre) => {
    const genreQuestionAnswer = generateGenreQuestionAnswer(genre);

    return genreQuestionAnswer;
  });

  return genreQuestionAnswers;
};

export { generateGenreQuestionAnswers };
