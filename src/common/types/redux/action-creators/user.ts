import { AuthStatus } from '~/common/enums/enums';
import { SetAuthStatusAction } from '~/common/types/redux/actions/user';

type SetAuthStatusAc = (status: AuthStatus) => SetAuthStatusAction;

type UserAC = {
  setAuthStatus: SetAuthStatusAc;
};

export { SetAuthStatusAc, UserAC };
