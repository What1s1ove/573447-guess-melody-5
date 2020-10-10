import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import GameHeader from './game-header';

describe(`GameHeader component`, () => {
  it(`should render GameHeader component`, () => {
    const component = render(
      <MemoryRouter>
        <GameHeader />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
