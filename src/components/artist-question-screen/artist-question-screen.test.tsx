import * as React from 'react';
import { render } from 'enzyme';
import ArtistQuestionScreen from './artist-question-screen';

describe(`ArtistQuestionScreen component`, () => {
  it(`should render ArtistQuestionScreen component`, () => {
    const component = render(<ArtistQuestionScreen />);

    expect(component).toMatchSnapshot();
  });
});
