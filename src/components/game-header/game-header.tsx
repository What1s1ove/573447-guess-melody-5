import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '~/common/enums/enums';

const MAX_ERROR_COUNT = 3;

const GameHeader = () => (
  <header className="game__header">
    <Link className="game__back" to={AppRoute.ROOT}>
      <span className="visually-hidden">Сыграть ещё раз</span>
      <img
        className="game__logo"
        src="img/melody-logo-ginger.png"
        alt="Угадай мелодию"
      />
    </Link>
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
      {Array.from(new Array(MAX_ERROR_COUNT), (_, idx) => (
        <div className="wrong" key={idx} />
      ))}
    </div>
  </header>
);

export default GameHeader;
