import * as React from 'react';
import { IArtistQuestionAnswer } from '~/common/interfaces/interfaces';
import { ChangeArtistQuestionAnswerCb } from '~/common/types/types';

type Props = {
  answer: IArtistQuestionAnswer;
  idx: number;
  onAnswerChange: ChangeArtistQuestionAnswerCb;
};

const ArtistQuestionAnswer: React.FC<Props> = ({
  answer,
  idx,
  onAnswerChange,
}) => {
  const answerLabel = React.useMemo(() => `answer-${idx}`, [idx]);

  const handleAnswerChange = React.useCallback(() => {
    onAnswerChange(answer);
  }, [onAnswerChange, answer]);

  return (
    <div className="artist">
      <label className="artist__name" htmlFor={answerLabel}>
        <input
          className="artist__input visually-hidden"
          onChange={handleAnswerChange}
          id={answerLabel}
          type="radio"
        />
        <img
          className="artist__picture"
          src={answer.picture}
          alt={answer.artist}
        />
        {answer.artist}
      </label>
    </div>
  );
};

export default ArtistQuestionAnswer;
