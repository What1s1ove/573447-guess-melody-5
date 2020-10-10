import { getRandomItem, getShuffledArray } from '~/helpers/array/array';
import { generateArtistQuestionSong } from '~/mocks/helpers/generate-artist-question-song.helper';
import { generateArtistQuestionAnswer } from '~/mocks/helpers/generate-artist-question-answer.helper';
import { generateArtistQuestionAnswers } from '~/mocks/helpers/generate-artist-question-answers.helper';
import { getUniqueAnswerTypes } from '~/mocks/helpers/get-unique-answer-types.helper';
import { IArtistQuestion } from '~/common/interfaces/interfaces';
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
    type: QuestionType.ARTIST,
    answers: [answer, ...answers],
  };
};

export { generateArtistQuestion };
