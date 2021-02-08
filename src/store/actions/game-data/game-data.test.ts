import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '~/services/api/api';
import { ApiRoute, GameDataActionType, HttpCode } from '~/common/enums/enums';
import { mockedQuestions } from '~/mocks/mocks';
import { GameDataActionCreator } from './game-data';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`Game-data action creator works correctly`, () => {
  it(`loadQuestions ac returns correct action`, () => {
    expect(GameDataActionCreator.loadQuestion(mockedQuestions)).toEqual({
      type: GameDataActionType.LOAD_QUESTIONS,
      payload: {
        questions: mockedQuestions,
      },
    });
  });

  it(`login ac returns correct action. Should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = GameDataActionCreator.fetchQuestions();

    apiMock.onGet(ApiRoute.QUESTIONS).reply(HttpCode.SUCCESS, mockedQuestions);

    return questionLoader(dispatch, jest.fn(), { api }).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: GameDataActionType.LOAD_QUESTIONS,
        payload: {
          questions: mockedQuestions,
        },
      });
    });
  });
});
