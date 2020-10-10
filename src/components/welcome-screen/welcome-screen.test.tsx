import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import WelcomeScreen from './welcome-screen';

describe(`WelcomeScreen component`, () => {
  it(`should render WelcomeScreen component`, () => {
    const component = render(
      <MemoryRouter>
        <WelcomeScreen errorsCount={3} />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
