import * as React from 'react';
import { shallow } from 'enzyme';
import { mockedArtistQuestionAnswer } from '~/mocks/mocks';
import ArtistQuestionAnswer from './artist-question-answer';

describe(`ArtistQuestionAnswer component`, () => {
  it(`should call callback if answer change`, () => {
    const onAnswerChange = jest.fn();
    const component = shallow(
      <ArtistQuestionAnswer
        answer={mockedArtistQuestionAnswer}
        idx={1}
        onAnswerChange={onAnswerChange}
      />
    );

    component.find(`.artist__input`).simulate(`change`);

    expect(onAnswerChange).toHaveBeenCalled();
  });
});
