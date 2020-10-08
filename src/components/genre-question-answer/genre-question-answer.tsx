/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';
import {
  ChangeGenreQuestionAnswerCb,
  InputChangeEvent,
} from '~/common/types/types';

type Props = {
  answer: IGenreQuestionAnswer;
  idx: number;
  isChecked: boolean;
  changeAnswer: ChangeGenreQuestionAnswerCb;
};

const GenreQuestionAnswer: React.FC<Props> = ({
  idx,
  isChecked,
  answer,
  changeAnswer,
}) => {
  const handleAnswerChange = ({ target }: InputChangeEvent) => {
    const { value, checked } = target;
    changeAnswer(Number(value), checked);
  };

  return (
    <div key={`${answer.src}`} className="track">
      <button
        className="track__button track__button--play"
        aria-label="Play music"
        type="button"
      />
      <div className="track__status">
        <audio src={answer.src} />
      </div>
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={idx}
          id={idx.toString()}
          checked={isChecked}
          onChange={handleAnswerChange}
        />
        <label className="game__check" htmlFor={idx.toString()}>
          Отметить
        </label>
      </div>
    </div>
  );
};

export default GenreQuestionAnswer;
