import * as React from 'react';
import { render } from 'enzyme';
import WinScreen from './win-screen';

describe(`WinScreen component`, () => {
  it(`should render WinScreen component`, () => {
    const component = render(<WinScreen />);

    expect(component).toMatchSnapshot();
  });
});
