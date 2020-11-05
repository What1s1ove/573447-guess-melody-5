import { AppRoute, AuthStatus } from '~/common/enums/enums';
import { IUserAuthData } from '~/common/interfaces/interfaces';
import {
  SetAuthStatusAction,
  RedirectToRouteAction,
} from '~/common/types/redux/actions/user';
import { AppThunk } from '~/common/types/redux/thunk/thunk';

type SetAuthStatusAc = (status: AuthStatus) => SetAuthStatusAction;

type RedirectToRouteAc = (path: AppRoute) => RedirectToRouteAction;

type CheckAuthAc = () => AppThunk<SetAuthStatusAction>;

type LoginAc = (authData: IUserAuthData) => AppThunk<RedirectToRouteAction>;

type UserAC = {
  setAuthStatus: SetAuthStatusAc;
  redirectToRoute: RedirectToRouteAc;
  checkAuth: CheckAuthAc;
  login: LoginAc;
};

export { SetAuthStatusAc, CheckAuthAc, LoginAc, UserAC };
