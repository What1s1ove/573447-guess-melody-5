import * as React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '~/store/store';
import { generateQuestions } from '~/mocks/helpers/helpers';
import App from './components/app/app';

const AppConfig = {
  ERRORS_COUNT: 3,
  QUESTION_COUNT: 5,
};

const questions = generateQuestions(AppConfig.QUESTION_COUNT);

ReactDOM.render(
  <Provider store={store}>
    <App questions={questions} errorsCount={AppConfig.ERRORS_COUNT} />
  </Provider>,
  document.querySelector(`#root`)
);
