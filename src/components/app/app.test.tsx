import * as React from 'react';
import { render } from 'enzyme';
import { mockedQuestions } from '~/mocks/mocks';
import App from './app';

describe(`App component`, () => {
  it(`should render App component`, () => {
    const component = render(<App questions={mockedQuestions} />);

    expect(component).toMatchSnapshot();
  });
});
