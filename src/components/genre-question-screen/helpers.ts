const getUpdatedAnswers = (
  answers: boolean[],
  answerIdx: number,
  isChecked: boolean
) => {
  const updatedAnswers = answers.map((answer, idx) =>
    answerIdx === idx ? isChecked : answer
  );

  return updatedAnswers;
};

export { getUpdatedAnswers };
