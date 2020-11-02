import {
  ApiRoute,
  AppRoute,
  AuthStatus,
  UserActionType,
} from '~/common/enums/enums';
import { UserAC } from '~/common/types/types';

const UserActionCreator: UserAC = {
  setAuthStatus: (status) => ({
    type: UserActionType.SET_AUTH_STATUS,
    payload: {
      status,
    },
  }),
  redirectToRoute: (path) => ({
    type: UserActionType.REDIRECT_TO_ROUTE,
    payload: {
      path,
    },
  }),
  checkAuth: () => (dispatch, _, { api }) => {
    api
      .get(ApiRoute.LOGIN)
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .catch((err: Error) => {
        console.error(err.message);
      });
  },
  login: ({ email, password }) => (dispatch, _, { api }) => {
    api
      .post(ApiRoute.LOGIN, { email, password })
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .then(() => dispatch(UserActionCreator.redirectToRoute(AppRoute.RESULT)))
      .catch((err: Error) => {
        console.error(err.message);
      });
  },
};

export { UserActionCreator };
