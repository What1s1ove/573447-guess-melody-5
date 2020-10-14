import * as React from 'react';
import { render } from 'enzyme';
import { mockedGenreQuestion } from '~/mocks/mocks';
import GenreQuestionScreen from './genre-question-screen';

describe(`GenreQuestionScreen component`, () => {
  it(`should render GenreQuestionScreen component`, () => {
    const component = render(
      <GenreQuestionScreen
        question={mockedGenreQuestion}
        renderPlayer={jest.fn()}
        onAnswer={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
