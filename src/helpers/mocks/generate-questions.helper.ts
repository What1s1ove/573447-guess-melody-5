import { getRandomItem } from '~/helpers/array/array';
import { QuestionType } from '~/common/enums/enums';

const questionTypes = Object.values(QuestionType);

const generateQuestions = (count: number) => {
  const questions = Array.from(new Array(count), () =>
    getRandomItem(questionTypes)
  );

  return questions;
};

export { generateQuestions };
