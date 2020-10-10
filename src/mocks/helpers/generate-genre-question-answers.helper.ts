import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';

const generateGenreQuestionAnswer = (genre: string): IGenreQuestionAnswer => ({
  genre,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
});

const generateGenreQuestionAnswers = (
  genres: string[]
): IGenreQuestionAnswer[] => {
  const genreQuestionAnswers = genres.map((genre) => {
    const genreQuestionAnswer = generateGenreQuestionAnswer(genre);

    return genreQuestionAnswer;
  });

  return genreQuestionAnswers;
};

export { generateGenreQuestionAnswer, generateGenreQuestionAnswers };
