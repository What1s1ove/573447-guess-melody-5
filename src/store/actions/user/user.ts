import { AppRoute, AuthStatus, UserActionType } from '~/common/enums/enums';
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
      .get(`/login`)
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .catch((err: Error) => {
        throw err;
      });
  },
  login: ({ email, password }) => (dispatch, _, { api }) => {
    api
      .post(`/login`, { email, password })
      .then(() => dispatch(UserActionCreator.setAuthStatus(AuthStatus.AUTH)))
      .then(() => dispatch(UserActionCreator.redirectToRoute(AppRoute.RESULT)))
      .catch((err: Error) => {
        throw err;
      });
  },
};

export { UserActionCreator };
