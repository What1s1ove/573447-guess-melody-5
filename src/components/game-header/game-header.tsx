import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '~/common/enums/enums';
import MistakesList from '~/components/mistakes-list/mistakes-list';

type Props = {
  mistakesCount: number;
};

const GameHeader: React.FC<Props> = ({ mistakesCount }) => (
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
    <MistakesList mistakesCount={mistakesCount} />
  </header>
);

export default GameHeader;
