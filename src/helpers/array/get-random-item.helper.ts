import { getRandomNumber } from '~/helpers/number/number';

const getRandomItem = <T>(items: T[]) => {
  const randomIdx = getRandomNumber(0, items.length - 1);

  const randomItem = items[randomIdx];

  return randomItem;
};

export { getRandomItem };
