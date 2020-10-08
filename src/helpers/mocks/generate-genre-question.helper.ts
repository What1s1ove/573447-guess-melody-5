import { getRandomItem, getShuffledArray } from '~/helpers/array/array';
import { generateGenreQuestionAnswer } from '~/helpers/mocks/generate-genre-question-answer.helper';
import { generateGenreQuestionAnswers } from '~/helpers/mocks/generate-genre-question-answers.helper';
import { getUniqueAnswerTypes } from '~/helpers/mocks/get-unique-answer-types.helper';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { GenreType, QuestionType } from '~/common/enums/enums';

const CUT_GENRE_START_IDX = 0;
const ANSWERS_COUNT = 2;

const genreTypes = Object.values(GenreType);

const generateGenreQuestion = (): IGenreQuestion => {
  const genre = getRandomItem(genreTypes);
  const answer = generateGenreQuestionAnswer(genre);
  const uniqueGenreTypes = getUniqueAnswerTypes(genre, genreTypes);
  const answers = generateGenreQuestionAnswers(
    getShuffledArray(uniqueGenreTypes.slice(CUT_GENRE_START_IDX, ANSWERS_COUNT))
  );

  return {
    genre,
    type: QuestionType.GENRE,
    answers: [answer, ...answers],
  };
};

export { generateGenreQuestion };
