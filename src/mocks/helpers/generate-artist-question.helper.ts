import { getRandomItem, getShuffledArray, generateRandomId } from '~/helpers/helpers';
import {
  generateArtistQuestionAnswer,
  generateArtistQuestionAnswers,
} from '~/mocks/helpers/generate-artist-question-answers.helper';
import { getUniqueAnswerTypes } from '~/mocks/helpers/get-unique-answer-types.helper';
import {
  IArtistQuestion,
  IArtistQuestionSong,
} from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';

const CUT_GENRE_START_IDX = 0;
const ANSWERS_COUNT = 2;
const ARTISTS = [
  `Jim Beam`,
  `John Snow`,
  `Jack Daniels`,
  `Cersei Lannister`,
  `Billie Eilish`,
];

const generateArtistQuestionSong = (artist: string): IArtistQuestionSong => ({
  artist,
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
});

const generateArtistQuestion = (): IArtistQuestion => {
  const artist = getRandomItem(ARTISTS);
  const song = generateArtistQuestionSong(artist);
  const answer = generateArtistQuestionAnswer(artist);
  const uniqueArtists = getUniqueAnswerTypes(artist, ARTISTS);
  const answers = generateArtistQuestionAnswers(
    getShuffledArray(uniqueArtists.slice(CUT_GENRE_START_IDX, ANSWERS_COUNT))
  );

  return {
    song,
    answers: [answer, ...answers],
    id: generateRandomId(),
    type: QuestionType.ARTIST,
  };
};

export { generateArtistQuestion };
