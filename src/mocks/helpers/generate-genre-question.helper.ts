import { getRandomItem, getShuffledArray } from '~/helpers/array';
import {
  generateGenreQuestionAnswer,
  generateGenreQuestionAnswers,
} from '~/mocks/helpers/generate-genre-question-answers.helper';
import { getUniqueAnswerTypes } from '~/mocks/helpers/get-unique-answer-types.helper';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';

const GENRE_TYPES = [
  `rock`,
  `blues`,
  `jazz`,
  `metal`,
  `pop`,
  `country`,
  `techno`,
];
const CUT_GENRE_START_IDX = 0;
const ANSWERS_COUNT = 3;

const generateGenreQuestion = (): IGenreQuestion => {
  const genre = getRandomItem(GENRE_TYPES);
  const answer = generateGenreQuestionAnswer(genre);
  const uniqueGenreTypes = getUniqueAnswerTypes(genre, GENRE_TYPES);
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
