import { getRandomItem } from '~/helpers/array/array';
import { generateQuestion } from '~/helpers/mocks/generate-question.helper';
import { QuestionType } from '~/common/enums/enums';
import { GameQuestion } from '~/common/types/types';

const questionTypes = Object.values(QuestionType);

const generateQuestions = (count: number): GameQuestion[] => {
  const questions = Array.from(new Array(count), () => {
    const genre = getRandomItem(questionTypes);

    return generateQuestion(genre);
  });

  return questions;
};

export { generateQuestions };
