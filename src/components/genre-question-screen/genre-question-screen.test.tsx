import * as React from 'react';
import { render } from 'enzyme';
import GenreQuestionScreen from './genre-question-screen';

describe(`GenreQuestionScreen component`, () => {
  it(`should render GenreQuestionScreen component`, () => {
    const component = render(<GenreQuestionScreen />);

    expect(component).toMatchSnapshot();
  });
});
