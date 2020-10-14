import * as React from 'react';
import { render } from 'enzyme';
import { mockedArtistQuestion } from '~/mocks/mocks';
import ArtistQuestionScreen from './artist-question-screen';

describe(`ArtistQuestionScreen component`, () => {
  it(`should render ArtistQuestionScreen component`, () => {
    const component = render(
      <ArtistQuestionScreen
        question={mockedArtistQuestion}
        renderPlayer={jest.fn()}
        onAnswer={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
