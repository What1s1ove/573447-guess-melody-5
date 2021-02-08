import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { store } from '~/mocks/mocks';
import WinScreen from './win-screen';

describe(`WinScreen component`, () => {
  it(`should render WinScreen component`, () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <WinScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
