import { IArtistQuestion } from '~/common/interfaces/interfaces';
import { QuestionType } from '~/common/enums/enums';
import { mockedArtistQuestionAnswer } from '~/mocks/game/artist-question-answer.mock';

const mockedArtistQuestion: IArtistQuestion = {
  type: QuestionType.ARTIST,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      picture: `https://api.adorable.io/avatars/128/0.1`,
      artist: `John Snow`,
    },
    {
      picture: `https://api.adorable.io/avatars/128/0.1`,
      artist: `Jim Beam`,
    },
    mockedArtistQuestionAnswer,
  ],
};

export { mockedArtistQuestion };
