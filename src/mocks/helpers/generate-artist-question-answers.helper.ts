import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';

const generateArtistQuestionAnswer = (
  artist: string
): IArtistQuestionAnswer => ({
  artist,
  picture: `https://via.placeholder.com/135`,
});

const generateArtistQuestionAnswers = (
  artists: string[]
): IArtistQuestionAnswer[] => {
  const artistQuestionAnswers = artists.map((artist) =>
    generateArtistQuestionAnswer(artist)
  );

  return artistQuestionAnswers;
};

export { generateArtistQuestionAnswer, generateArtistQuestionAnswers };
