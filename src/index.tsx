import * as React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store, { dispatch } from '~/store/store';
import App from './components/app/app';
import {
  GameDataActionCreator,
  UserActionCreator,
} from '~/store/actions/actions';

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

Promise.all([
  dispatch(GameDataActionCreator.fetchQuestions()),
  dispatch(UserActionCreator.checkAuth()),
]).then(() => init());
