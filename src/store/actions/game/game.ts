import {
  checkIsArtistAnswerCorrect,
  checkIsGenreAnswerCorrect,
} from '~/helpers/game';
import { GameActionType, QuestionType } from '~/common/enums/enums';
import { GameAC } from '~/common/types/types';
import {
  IArtistQuestionAnswer,
  IGenreQuestionAnswer,
} from '~/common/interfaces/game/game';

const GameActionCreator: GameAC = {
  incrementStep: () => ({
    type: GameActionType.INCREMENT_STEP,
    payload: {
      incrementStepCount: 1,
    },
  }),
  incrementMistake: (question, answer) => {
    let isCorrectAnswer = false;

    switch (question.type) {
      case QuestionType.GENRE: {
        isCorrectAnswer = checkIsGenreAnswerCorrect(
          question,
          answer as IGenreQuestionAnswer[]
        );
        break;
      }
      case QuestionType.ARTIST: {
        isCorrectAnswer = checkIsArtistAnswerCorrect(
          question,
          answer as IArtistQuestionAnswer
        );
        break;
      }
    }

    return {
      type: GameActionType.INCREMENT_MISTAKES,
      payload: {
        incrementMistakeCount: isCorrectAnswer ? 0 : 1,
      },
    };
  },
  resetGame: () => ({
    type: GameActionType.RESET_GAME,
  }),
};

export { GameActionCreator };
