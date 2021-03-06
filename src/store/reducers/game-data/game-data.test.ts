import { mockedQuestions } from '~/mocks/mocks';
import { GameDataActionType } from '~/common/enums/enums';
import { gameDataReducer } from './game-data';

describe(`Game data reducer works correctly`, () => {
  it(`loadQuestions case works correctly`, () => {
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
