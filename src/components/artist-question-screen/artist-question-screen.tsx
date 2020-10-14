/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { IArtistQuestion } from '~/common/interfaces/interfaces';
import {
  AnswerArtistQuestionCb,
  ChangeArtistQuestionAnswerCb,
  WithActivePlayer,
} from '~/common/types/types';
import ArtistQuestionAnswer from '~/components/artist-question-answer/artist-question-answer';

const PLAYER_IDX = 0;

type Props = {
  question: IArtistQuestion;
  onAnswer: AnswerArtistQuestionCb;
};

const ArtistQuestionScreen: React.FC<Props & WithActivePlayer> = ({
  question,
  renderPlayer,
  onAnswer,
}) => {
  const onAnswerChange: ChangeArtistQuestionAnswerCb = (answer) => {
    onAnswer(question, answer);
  };

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(question.song.src, PLAYER_IDX)}
        </div>
      </div>
      <form className="game__artist">
        {question.answers.map((answer, idx) => (
          <ArtistQuestionAnswer
            answer={answer}
            idx={idx}
            onAnswerChange={onAnswerChange}
            key={answer.artist}
          />
        ))}
      </form>
    </section>
  );
};

export default ArtistQuestionScreen;
