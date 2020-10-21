import { GameActionType, GameConfig } from '~/common/enums/enums';
import {
  checkIsArtistAnswerCorrect,
  checkIsGenreAnswerCorrect,
} from '~/helpers/game';
import {
  mockedArtistQuestion,
  mockedArtistQuestionAnswer,
  mockedGenreQuestion,
} from '~/mocks/mocks';
import { GameActionCreator } from './game';

describe(`Game action creator works correctly`, () => {
  it(`incrementStep ac returns correct action`, () => {
    expect(GameActionCreator.incrementStep()).toEqual({
      type: GameActionType.INCREMENT_STEP,
      payload: {
        incrementStepCount: GameConfig.INCREMENT_STEP_COUNT,
      },
    });
  });

  it(`resetGame ac returns correct action`, () => {
    expect(GameActionCreator.resetGame()).toEqual({
      type: GameActionType.RESET_GAME,
    });
  });

  it(`incrementMistake ac returns correct action for the genre answer`, () => {
    const answers = [true, false, true, false];
    const isCorrect = checkIsGenreAnswerCorrect(mockedGenreQuestion, answers);

    expect(
      GameActionCreator.incrementMistake(mockedGenreQuestion, answers)
    ).toEqual({
      type: GameActionType.INCREMENT_MISTAKES,
      payload: {
        incrementMistakeCount: isCorrect
          ? GameConfig.INCORRECT_ANSWER_INCREMENT_COUNT
          : GameConfig.INCREMENT_MISTAKE_COUNT,
      },
    });
  });

  it(`incrementMistake ac returns correct action for the genre answer`, () => {
    const isCorrect = checkIsArtistAnswerCorrect(
      mockedArtistQuestion,
      mockedArtistQuestionAnswer
    );

    expect(
      GameActionCreator.incrementMistake(
        mockedArtistQuestion,
        mockedArtistQuestionAnswer
      )
    ).toEqual({
      type: GameActionType.INCREMENT_MISTAKES,
      payload: {
        incrementMistakeCount: isCorrect
          ? GameConfig.INCORRECT_ANSWER_INCREMENT_COUNT
          : GameConfig.INCREMENT_MISTAKE_COUNT,
      },
    });
  });
});
