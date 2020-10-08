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
  onAnswerChange: ChangeGenreQuestionAnswerCb;
};

const GenreQuestionAnswer: React.FC<Props> = ({
  idx,
  isChecked,
  answer,
  onAnswerChange,
}) => {
  const answerLabel = React.useMemo(() => `answer-${idx}`, [idx]);

  const handleAnswerChange = React.useCallback(
    ({ target }: InputChangeEvent) => {
      const { value, checked } = target;

      onAnswerChange(Number(value), checked);
    },
    [onAnswerChange]
  );

  return (
    <div className="track">
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
          id={answerLabel}
          checked={isChecked}
          onChange={handleAnswerChange}
        />
        <label className="game__check" htmlFor={answerLabel}>
          Отметить
        </label>
      </div>
    </div>
  );
};

export default GenreQuestionAnswer;
