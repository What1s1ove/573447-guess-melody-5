import * as React from 'react';
import { render } from 'enzyme';
import { questions } from '~/mocks/mocks';
import App from './app';

describe(`App component`, () => {
  it(`should render App component`, () => {
    const component = render(<App questions={questions} errorsCount={3} />);

    expect(component).toMatchSnapshot();
  });
});
