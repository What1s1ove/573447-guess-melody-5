import * as React from 'react';
import { render } from 'enzyme';
import AuthScreen from './auth-screen';

describe(`AuthScreen component`, () => {
  it(`should render AuthScreen component`, () => {
    const component = render(<AuthScreen />);

    expect(component).toMatchSnapshot();
  });
});
