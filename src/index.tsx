import * as React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '~/store/store';
import App from './components/app/app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
