import { generateGenreQuestion } from '~/mocks/helpers/generate-genre-question.helper';
import { generateArtistQuestion } from '~/mocks/helpers/generate-artist-question.helper';
import { QuestionType } from '~/common/enums/enums';
import { GameQuestion } from '~/common/types/types';

// eslint-disable-next-line consistent-return
const generateQuestion = (type: QuestionType): GameQuestion => {
  switch (type) {
    case QuestionType.GENRE: {
      return generateGenreQuestion();
    }
    case QuestionType.ARTIST: {
      return generateArtistQuestion();
    }
  }
};

export { generateQuestion };
