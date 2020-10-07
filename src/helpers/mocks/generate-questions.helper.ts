import { getRandomItem } from '~/helpers/array/array';
import { generateQuestion } from '~/helpers/mocks/generate-question.helper';
import { QuestionType } from '~/common/enums/enums';

const questionTypes = Object.values(QuestionType);

const generateQuestions = (count: number) => {
  const questions = Array.from(new Array(count), () => {
    const genre = getRandomItem(questionTypes);

    return generateQuestion(genre);
  });

  return questions;
};

export { generateQuestions };
