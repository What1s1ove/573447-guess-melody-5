import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { store } from '~/mocks/mocks';
import GameScreen from './game-screen';

describe(`GameScreen component`, () => {
  it(`should render GameScreen component`, () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <GameScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
