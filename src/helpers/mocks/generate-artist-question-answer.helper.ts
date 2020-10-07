import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';
import { ArtistName } from '~/common/enums/enums';

const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const generateArtistQuestionAnswer = (
  artist: ArtistName
): IArtistQuestionAnswer => ({
  artist,
  picture: `${AVATAR_URL}/${Math.random()}`,
});

export { generateArtistQuestionAnswer };
