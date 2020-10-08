import { getRandomItem, getShuffledArray } from '~/helpers/array/array';
import { generateArtistQuestionSong } from '~/helpers/mocks/generate-artist-question-song.helper';
import { generateArtistQuestionAnswer } from '~/helpers/mocks/generate-artist-question-answer.helper';
import { generateArtistQuestionAnswers } from '~/helpers/mocks/generate-artist-question-answers.helper';
import { getUniqueAnswerTypes } from '~/helpers/mocks/get-unique-answer-types.helper';
import { IArtistQuestion } from '~/common/interfaces/interfaces';
import { ArtistName, QuestionType } from '~/common/enums/enums';

const CUT_GENRE_START_IDX = 0;
const ANSWERS_COUNT = 2;

const artists = Object.values(ArtistName);

const generateArtistQuestion = (): IArtistQuestion => {
  const artist = getRandomItem(artists);
  const song = generateArtistQuestionSong(artist);
  const answer = generateArtistQuestionAnswer(artist);
  const uniqueArtists = getUniqueAnswerTypes(artist, artists);
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
