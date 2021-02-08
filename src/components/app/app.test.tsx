import * as React from 'react';
import { render } from 'enzyme';
import App from './app';

describe(`App component`, () => {
  it(`should render App component`, () => {
    const component = render(<App  />);

    expect(component).toMatchSnapshot();
  });
});
