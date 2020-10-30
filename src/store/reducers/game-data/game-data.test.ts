import { mockedQuestions } from '~/mocks/mocks';
import { GameDataActionType } from '~/common/enums/enums';
import { gameDataReducer } from './game-data';

describe(`Game reducer works correctly`, () => {
  it(`loadOffers case works correctly`, () => {
    expect(
      gameDataReducer(
        {
          questions: [],
        },
        {
          type: GameDataActionType.LOAD_QUESTIONS,
          payload: {
            questions: mockedQuestions,
          },
        }
      )
    ).toEqual({
      questions: mockedQuestions,
    });
  });
});
