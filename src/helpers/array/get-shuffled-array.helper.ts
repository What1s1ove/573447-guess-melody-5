const RANDOM_SEPARATOR = 0.5;

const getShuffledArray = <T>(items: T[]) => {
  const shuffledArray = items
    .slice()
    .sort(() => Math.random() - RANDOM_SEPARATOR);

  return shuffledArray;
};

export { getShuffledArray };
