/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/media-has-caption */
import * as React from 'react';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { BindingCb } from '~/common/types/types';

type Props = {
  onAnswer: BindingCb;
  question: IGenreQuestion;
};

const GenreQuestionScreen: React.FC<Props> = () => (
  <section className="game game--genre">
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
      <h2 className="game__title">Выберите треки</h2>
    </section>
  </section>
);

export default GenreQuestionScreen;
