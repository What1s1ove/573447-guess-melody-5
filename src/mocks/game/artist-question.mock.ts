import { IArtistQuestion } from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';
import { mockedArtistQuestionAnswer } from '~/mocks/game/artist-question-answer.mock';

const mockedArtistQuestion: IArtistQuestion = {
  answers: [
    {
      artist: `John Snow`,
      picture: `https://via.placeholder.com/135`,
    },
    {
      artist: `Jim Beam`,
      picture: `https://via.placeholder.com/135`,
    },
    mockedArtistQuestionAnswer,
  ],
  id: `1`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  type: QuestionType.ARTIST,
};

export { mockedArtistQuestion };
