import { Middleware } from 'redux';
import { RootState } from '~/store/reducer.root';
import browserHistory from '~/browser-history';
import { UserActionType } from '~/common/enums/enums';

const redirect: Middleware<{}, RootState> = () => (next) => (action) => {
  if (action.type === UserActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export { redirect };
