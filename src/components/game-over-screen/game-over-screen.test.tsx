import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { store } from '~/mocks/mocks';
import GameOverScreen from './game-over-screen';

describe(`GameOverScreen component`, () => {
  it(`should render GameOverScreen component`, () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <GameOverScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
