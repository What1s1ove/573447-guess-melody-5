import { ArtistName } from '~/common/enums/enums';
import { IArtistQuestionSong } from '~/common/interfaces/game/game';

const generateArtistQuestionSong = (
  artist: ArtistName
): IArtistQuestionSong => ({
  artist,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
});

export { generateArtistQuestionSong };
