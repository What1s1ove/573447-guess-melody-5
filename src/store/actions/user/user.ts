import { UserActionType } from '~/common/enums/enums';
import { UserAC } from '~/common/types/types';

const UserActionCreator: UserAC = {
  setAuthStatus: (status) => ({
    type: UserActionType.SET_AUTH_STATUS,
    payload: {
      status,
    },
  }),
};

export { UserActionCreator };
