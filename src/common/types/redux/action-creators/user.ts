import { AuthStatus } from '~/common/enums/enums';
import { SetAuthStatusAction } from '~/common/types/redux/actions/user';
import { AppThunk } from '~/common/types/redux/thunk/thunk';

type SetAuthStatusAc = (status: AuthStatus) => SetAuthStatusAction;

type CheckAuthAc = () => AppThunk;

type UserAC = {
  setAuthStatus: SetAuthStatusAc;
  checkAuth: CheckAuthAc;
};

export { SetAuthStatusAc, UserAC };
