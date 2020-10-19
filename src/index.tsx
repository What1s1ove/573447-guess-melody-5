import * as React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from '~/store/store';
import { generateQuestions } from '~/mocks/helpers/helpers';
import App from './components/app/app';
import { GameConfig } from './common/enums/enums';

const questions = generateQuestions(GameConfig.QUESTION_COUNT);

ReactDOM.render(
  <Provider store={store}>
    <App questions={questions} />
  </Provider>,
  document.querySelector(`#root`)
);
