/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/media-has-caption */
import * as React from 'react';
import { IArtistQuestion } from '~/common/interfaces/interfaces';
import {
  AnswerArtistQuestionCb,
  ChangeArtistQuestionAnswerCb,
} from '~/common/types/types';
import ArtistQuestionAnswer from '~/components/artist-question-answer/artist-question-answer';

type Props = {
  question: IArtistQuestion;
  onAnswer: AnswerArtistQuestionCb;
};

const ArtistQuestionScreen: React.FC<Props> = ({ question, onAnswer }) => {
  const onAnswerChange: ChangeArtistQuestionAnswerCb = (answer) => {
    onAnswer(question, answer);
  };

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="timer"
          viewBox="0 0 780 780"
        >
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`,
            }}
          />
        </svg>
        <div className="game__mistakes">
          <div className="wrong" />
          <div className="wrong" />
          <div className="wrong" />
        </div>
      </header>
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button
              className="track__button track__button--play"
              type="button"
              aria-label="Play track"
            />
            <div className="track__status">
              <audio src={question.song.src} />
            </div>
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
    </section>
  );
};

export default ArtistQuestionScreen;
