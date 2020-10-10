import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const generateArtistQuestionAnswer = (
  artist: string
): IArtistQuestionAnswer => ({
  artist,
  picture: `${AVATAR_URL}/${Math.random()}`,
});

export { generateArtistQuestionAnswer };
