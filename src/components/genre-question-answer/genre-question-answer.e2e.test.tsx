import * as React from 'react';
import { shallow } from 'enzyme';
import { mockedGenreQuestionAnswer } from '~/mocks/mocks';
import GenreQuestionAnswer from './genre-question-answer';

describe(`GenreQuestionAnswer component`, () => {
  it(`should call callback if answer change`, () => {
    const onAnswerChange = jest.fn();
    const component = shallow(
      <GenreQuestionAnswer
        isChecked
        answer={mockedGenreQuestionAnswer}
        idx={1}
        renderPlayer={jest.fn()}
        onAnswerChange={onAnswerChange}
      />
    );

    component.find(`.game__input`).simulate(`change`, {
      target: {
        value: `1`,
        checked: false,
      },
    });

    expect(onAnswerChange).toHaveBeenCalled();
  });
});
