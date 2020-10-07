import { GenreType } from '~/common/enums/enums';

const getUniqueGenreTypes = (answeredGenre: GenreType, genres: GenreType[]) => {
  const uniquesAnswers = genres.filter((genre) => genre !== answeredGenre);

  return uniquesAnswers;
};

export { getUniqueGenreTypes };
