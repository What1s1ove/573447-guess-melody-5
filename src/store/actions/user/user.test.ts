import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '~/services/api/api';
import {
  ApiRoute,
  AppRoute,
  AuthStatus,
  HttpCode,
  UserActionType,
} from '~/common/enums/enums';
import { UserActionCreator } from './user';

const api = createAPI({
  onUnauthorized: jest.fn(),
});

describe(`User action creator works correctly`, () => {
  it(`setAuthStatus ac returns correct action`, () => {
    expect(UserActionCreator.setAuthStatus(AuthStatus.AUTH)).toEqual({
      type: UserActionType.SET_AUTH_STATUS,
      payload: {
        status: AuthStatus.AUTH,
      },
    });
  });

  it(`checkAuth ac returns correct action. Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = UserActionCreator.checkAuth();

    apiMock.onGet(ApiRoute.LOGIN).reply(HttpCode.SUCCESS);

    return checkAuthLoader(dispatch, jest.fn(), { api }).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_AUTH_STATUS,
        payload: {
          status: AuthStatus.AUTH,
        },
      });
    });
  });

  it(`login ac returns correct action. Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: `test@test.ru`, password: `123456` };
    const loginLoader = UserActionCreator.login(fakeUser);

    apiMock.onPost(ApiRoute.LOGIN).reply(HttpCode.SUCCESS, {});

    return loginLoader(dispatch, jest.fn(), { api }).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UserActionType.SET_AUTH_STATUS,
        payload: {
          status: AuthStatus.AUTH,
        },
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UserActionType.REDIRECT_TO_ROUTE,
        payload: {
          path: AppRoute.RESULT,
        },
      });
    });
  });
});
