import * as React from 'react';
import { render } from 'enzyme';
import WelcomeScreen from './welcome-screen';

describe(`WelcomeScreen component`, () => {
  it(`should render WelcomeScreen component`, () => {
    const component = render(<WelcomeScreen errorsCount={3} />);

    expect(component).toMatchSnapshot();
  });
});
