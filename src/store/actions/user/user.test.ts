import { AuthStatus, UserActionType } from '~/common/enums/enums';
import { UserActionCreator } from './user';

describe(`User action creator works correctly`, () => {
  it(`setAuthStatus ac returns correct action`, () => {
    expect(UserActionCreator.setAuthStatus(AuthStatus.AUTH)).toEqual({
      type: UserActionType.SET_AUTH_STATUS,
      payload: {
        status: AuthStatus.AUTH,
      },
    });
  });
});
