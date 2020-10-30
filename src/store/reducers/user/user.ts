import { AuthStatus, UserActionType } from '~/common/enums/enums';
import { UserAction } from '~/common/types/types';

type UserState = {
  status: AuthStatus;
};

const initialState: UserState = {
  status: AuthStatus.NO_AUTH,
};

const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.SET_AUTH_STATUS: {
      const { status } = action.payload;

      return {
        ...state,
        status,
      };
    }
  }

  return state;
};

export { userReducer };
