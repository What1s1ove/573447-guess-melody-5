import { IArtistQuestion } from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';
import { mockedArtistQuestionAnswer } from '~/mocks/game/artist-question-answer.mock';

const mockedArtistQuestion: IArtistQuestion = {
  id: `1`,
  type: QuestionType.ARTIST,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      picture: `https://via.placeholder.com/135`,
      artist: `John Snow`,
    },
    {
      picture: `https://via.placeholder.com/135`,
      artist: `Jim Beam`,
    },
    mockedArtistQuestionAnswer,
  ],
};

export { mockedArtistQuestion };
