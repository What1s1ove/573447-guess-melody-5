import { getRandomNumber } from '~/helpers/number/number';

const RANDOM_SEPARATOR = 0.5;

const getRandomItem = <T>(items: T[]) => {
  const randomIdx = getRandomNumber(0, items.length - 1);

  const randomItem = items[randomIdx];

  return randomItem;
};

const getShuffledArray = <T>(items: T[]) => {
  const shuffledArray = items
    .slice()
    .sort(() => Math.random() - RANDOM_SEPARATOR);

  return shuffledArray;
};

export { getRandomItem, getShuffledArray };
