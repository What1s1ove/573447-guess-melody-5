import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { store } from '~/mocks/mocks';
import AuthScreen from './auth-screen';

describe(`AuthScreen component`, () => {
  it(`should render AuthScreen component`, () => {
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <AuthScreen />
        </MemoryRouter>
      </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});
