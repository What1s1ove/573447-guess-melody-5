import * as React from 'react';
import { render } from 'enzyme';
import { mockedQuestions } from '~/mocks/mocks';
import GameScreen from './game-screen';

describe(`GameScreen component`, () => {
  it(`should render GameScreen component`, () => {
    const component = render(<GameScreen questions={mockedQuestions} />);

    expect(component).toMatchSnapshot();
  });
});
