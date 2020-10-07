import { QuestionType } from '~/common/enums/enums';

const generateQuestion = (type: QuestionType) => {
  switch (type) {
    case QuestionType.GENRE: {
      return null;
    }
    case QuestionType.ARTIST: {
      return null;
    }
  }

  return null;
};

export { generateQuestion };
