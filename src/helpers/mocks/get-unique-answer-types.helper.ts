const getUniqueAnswerTypes = <T>(answer: T, answerTypes: T[]) => {
  const uniquesAnswers = answerTypes.filter(
    (answerType) => answerType !== answer
  );

  return uniquesAnswers;
};

export { getUniqueAnswerTypes };
