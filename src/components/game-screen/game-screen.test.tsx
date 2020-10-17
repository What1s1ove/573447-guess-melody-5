import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { mockedQuestions } from '~/mocks/mocks';
import { GameScreen } from './game-screen';

describe(`GameScreen component`, () => {
  it(`should render GameScreen component`, () => {
    const component = render(
      <MemoryRouter>
        <GameScreen
          questions={mockedQuestions}
          step={1}
          mistakesCount={1}
          incrementStep={jest.fn()}
          resetGame={jest.fn()}
        />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
