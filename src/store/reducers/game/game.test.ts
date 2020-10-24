import { GameActionType } from '~/common/enums/enums';
import { gameReducer } from './game';

describe(`Game reducer works correctly`, () => {
  it(`incrementStep case works correctly`, () => {
    const incrementCount = 1;

    expect(
      gameReducer(
        {
          step: 0,
          mistakesCount: 0,
        },
        {
          type: GameActionType.INCREMENT_STEP,
          payload: {
            incrementStepCount: incrementCount,
          },
        }
      )
    ).toEqual({
      step: incrementCount,
      mistakesCount: 0,
    });
  });

  it(`Reset game case works correctly`, () => {
    expect(
      gameReducer(
        {
          step: 1,
          mistakesCount: 2,
        },
        {
          type: GameActionType.RESET_GAME,
        }
      )
    ).toEqual({
      step: 0,
      mistakesCount: 0,
    });
  });

  it(`Increment mistake case works correctly`, () => {
    const incrementCount = 1;

    expect(
      gameReducer(
        {
          step: 0,
          mistakesCount: 0,
        },
        {
          type: GameActionType.INCREMENT_MISTAKES,
          payload: {
            incrementMistakeCount: incrementCount,
          },
        }
      )
    ).toEqual({
      step: 0,
      mistakesCount: incrementCount,
    });
  });
});
