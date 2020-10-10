import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const generateArtistQuestionAnswer = (
  artist: string
): IArtistQuestionAnswer => ({
  artist,
  picture: `${AVATAR_URL}/${Math.random()}`,
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
