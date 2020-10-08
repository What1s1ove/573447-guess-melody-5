import { IArtistQuestionSong } from '~/common/interfaces/interfaces';

const generateArtistQuestionSong = (
  artist: string
): IArtistQuestionSong => ({
  artist,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
});

export { generateArtistQuestionSong };
