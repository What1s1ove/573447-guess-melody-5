import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';
import { GenreQuestionUserAnswers } from '~/common/types/types';

const getUpdatedAnswers = (
  answers: GenreQuestionUserAnswers,
  answerIdx: number,
  isChecked: boolean
) => {
  const updatedAnswers = answers.map((answer, idx) =>
    answerIdx === idx ? isChecked : answer
  );

  return updatedAnswers;
};

const generateDefaultUserAnswers = (answers: IGenreQuestionAnswer[]) => {
  const defaultUserAnswers = new Array(answers.length).fill(false) as boolean[];

  return defaultUserAnswers;
};

export { generateDefaultUserAnswers, getUpdatedAnswers };
