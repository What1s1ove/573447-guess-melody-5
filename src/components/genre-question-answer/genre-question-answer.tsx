/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { IGenreQuestionAnswer } from '~/common/interfaces/interfaces';
import {
  ChangeGenreQuestionAnswerCb,
  InputChangeEvent,
  RenderPlayerCb,
} from '~/common/types/types';

type Props = {
  answer: IGenreQuestionAnswer;
  idx: number;
  isChecked: boolean;
  renderPlayer: RenderPlayerCb;
  onAnswerChange: ChangeGenreQuestionAnswerCb;
};

const GenreQuestionAnswer: React.FC<Props> = ({
  idx,
  isChecked,
  answer,
  renderPlayer,
  onAnswerChange,
}) => {
  const answerLabel = `answer-${idx}`;

  const handleAnswerChange = ({ target }: InputChangeEvent) => {
    const { value, checked } = target;

    onAnswerChange(Number(value), checked);
  };

  return (
    <div className="track">
      {renderPlayer(answer.src, idx)}
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
