import * as React from 'react';
import { render } from 'enzyme';
import GameOverScreen from './game-over-screen';

describe(`GameOverScreen component`, () => {
  it(`should render GameOverScreen component`, () => {
    const component = render(<GameOverScreen />);

    expect(component).toMatchSnapshot();
  });
});
