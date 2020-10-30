import { UserActionType, AuthStatus, AppRoute } from '~/common/enums/enums';

type SetAuthStatusAction = {
  type: UserActionType.SET_AUTH_STATUS;
  payload: {
    status: AuthStatus;
  };
};

type RedirectToRouteAction = {
  type: UserActionType.REDIRECT_TO_ROUTE;
  payload: {
    path: AppRoute;
  };
};

type UserAction = SetAuthStatusAction | RedirectToRouteAction;

export { SetAuthStatusAction, RedirectToRouteAction, UserAction };
