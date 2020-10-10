import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { generateQuestions } from '~/mocks/helpers/helpers';

const QUESTION_COUNT = 5;

const Settings = {
  ERRORS_COUNT: 3,
};

const questions = generateQuestions(QUESTION_COUNT);

ReactDOM.render(
  <App questions={questions} errorsCount={Settings.ERRORS_COUNT} />,
  document.querySelector(`#root`)
);
