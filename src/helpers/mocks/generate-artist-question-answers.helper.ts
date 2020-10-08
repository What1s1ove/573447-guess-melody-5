import { generateArtistQuestionAnswer } from '~/helpers/mocks/generate-artist-question-answer.helper';
import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';

const generateArtistQuestionAnswers = (
  artists: string[]
): IArtistQuestionAnswer[] => {
  const artistQuestionAnswers = artists.map((artist) =>
    generateArtistQuestionAnswer(artist)
  );

  return artistQuestionAnswers;
};

export { generateArtistQuestionAnswers };
