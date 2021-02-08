import { Middleware } from 'redux';
import { RootState } from '~/store/reducer.root';
import browserHistory from '~/browser-history';
import { UserActionType } from '~/common/enums/enums';
import { RedirectToRouteAction } from '~/common/types/types';

const redirect: Middleware<{}, RootState> = () => (next) => (action) => {
  if (action.type === UserActionType.REDIRECT_TO_ROUTE) {
    const currentAction = action as RedirectToRouteAction;

    browserHistory.push(currentAction.payload.path);
  }

  return next(action);
};

export { redirect };
