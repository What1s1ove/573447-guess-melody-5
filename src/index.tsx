import * as React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store, { dispatch } from '~/store/store';
import App from './components/app/app';
import { GameDataActionCreator } from '~/store/actions/actions';

dispatch(GameDataActionCreator.fetchQuestions());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
