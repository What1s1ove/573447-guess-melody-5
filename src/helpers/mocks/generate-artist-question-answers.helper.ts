import { generateArtistQuestionAnswer } from '~/helpers/mocks/generate-artist-question-answer.helper';
import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';
import { ArtistName } from '~/common/enums/enums';

const generateArtistQuestionAnswers = (
  artists: ArtistName[]
): IArtistQuestionAnswer[] => {
  const artistQuestionAnswers = artists.map((artist) =>
    generateArtistQuestionAnswer(artist)
  );

  return artistQuestionAnswers;
};

export { generateArtistQuestionAnswers };
