import { AuthStatus, UserActionType } from '~/common/enums/enums';
import { userReducer } from './user';

describe(`User reducer works correctly`, () => {
  it(`setAuthStatus case works correctly`, () => {
    expect(
      userReducer(
        {
          status: AuthStatus.NO_AUTH,
        },
        {
          type: UserActionType.SET_AUTH_STATUS,
          payload: {
            status: AuthStatus.AUTH,
          },
        }
      )
    ).toEqual({
      status: AuthStatus.AUTH,
    });
  });
});
