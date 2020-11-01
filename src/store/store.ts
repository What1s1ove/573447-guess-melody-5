import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createAPI } from '~/services/api/api';
import { AuthStatus } from '~/common/enums/enums';
import { AppDispatch } from '~/common/types/types';
import { UserActionCreator } from '~/store/actions/actions';
import { redirect } from '~/store/middlewares/middlewares';
import rootReducer from './reducer.root';

const api = createAPI({
  onUnauthorized: () => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    store.dispatch(UserActionCreator.setAuthStatus(AuthStatus.NO_AUTH));
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument({
        api,
      })
    ),
    applyMiddleware(redirect)
  )
);

const dispatch = store.dispatch as AppDispatch;

export { dispatch };

export default store;
