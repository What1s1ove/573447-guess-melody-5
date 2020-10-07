import { generateGenreQuestion } from '~/helpers/mocks/generate-genre-question.helper';
import { generateArtistQuestion } from '~/helpers/mocks/generate-artist-question.helper';
import { QuestionType } from '~/common/enums/enums';

// eslint-disable-next-line consistent-return
const generateQuestion = (type: QuestionType) => {
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
