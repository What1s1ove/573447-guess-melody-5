import { AuthStatus, UserActionType } from '~/common/enums/enums';
import { UserAC } from '~/common/types/types';

const UserActionCreator: UserAC = {
  setAuthStatus: (status) => ({
    type: UserActionType.SET_AUTH_STATUS,
    payload: {
      status,
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
};

export { UserActionCreator };
