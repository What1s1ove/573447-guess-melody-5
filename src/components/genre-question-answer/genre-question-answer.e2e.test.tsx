import * as React from 'react';
import { shallow } from 'enzyme';
import { mockedGenreQuestionAnswer } from '~/mocks/mocks';
import GenreQuestionAnswer from './genre-question-answer';

describe(`GenreQuestionAnswer component`, () => {
  it(`should call callback if answer change`, () => {
    const changeAnswerCb = jest.fn();
    const component = shallow(
      <GenreQuestionAnswer
        answer={mockedGenreQuestionAnswer}
        isChecked={true}
        idx={1}
        changeAnswer={changeAnswerCb}
      />
    );

    component.find(`.game__input`).simulate(`change`, {
      target: {
        value: `1`,
        checked: false,
      },
    });

    expect(changeAnswerCb).toHaveBeenCalled();
  });
});
