import { UserActionType } from '~/common/enums/enums';
import { AuthStatus } from '~/common/enums/user/user';

type SetAuthStatusAction = {
  type: UserActionType.SET_AUTH_STATUS;
  payload: {
    status: AuthStatus;
  };
};

type UserAction = SetAuthStatusAction;

export { SetAuthStatusAction, UserAction };
