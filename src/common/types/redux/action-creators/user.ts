import { AuthStatus } from '~/common/enums/enums';
import { IUserAuthData } from '~/common/interfaces/interfaces';
import { SetAuthStatusAction } from '~/common/types/redux/actions/user';
import { AppThunk } from '~/common/types/redux/thunk/thunk';

type SetAuthStatusAc = (status: AuthStatus) => SetAuthStatusAction;

type CheckAuthAc = () => AppThunk;

type LoginAc = (authData: IUserAuthData) => AppThunk;

type UserAC = {
  setAuthStatus: SetAuthStatusAc;
  checkAuth: CheckAuthAc;
  login: LoginAc;
};

export { SetAuthStatusAc, CheckAuthAc, LoginAc, UserAC };
