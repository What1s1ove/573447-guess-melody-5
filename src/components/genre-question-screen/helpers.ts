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

export { getUpdatedAnswers };
