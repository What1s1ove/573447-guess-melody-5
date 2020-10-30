import { UserActionType, AuthStatus } from '~/common/enums/enums';

type SetAuthStatusAction = {
  type: UserActionType.SET_AUTH_STATUS;
  payload: {
    status: AuthStatus;
  };
};

type UserAction = SetAuthStatusAction;

export { SetAuthStatusAction, UserAction };
