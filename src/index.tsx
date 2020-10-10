import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { generateQuestions } from '~/mocks/helpers/helpers';

const AppConfig = {
  ERRORS_COUNT: 3,
  QUESTION_COUNT: 5,
};

const questions = generateQuestions(AppConfig.QUESTION_COUNT);

ReactDOM.render(
  <App questions={questions} errorsCount={AppConfig.ERRORS_COUNT} />,
  document.querySelector(`#root`)
);
