import * as React from 'react';
import { render } from 'enzyme';
import { mockedArtistQuestionAnswer } from '~/mocks/mocks';
import ArtistQuestionAnswer from './artist-question-answer';

describe(`ArtistQuestionAnswer component`, () => {
  it(`should render ArtistQuestionAnswer component`, () => {
    const component = render(
      <ArtistQuestionAnswer
        answer={mockedArtistQuestionAnswer}
        idx={1}
        onAnswerChange={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
