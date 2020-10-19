import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, GameConfig } from '~/common/enums/enums';

const WelcomeScreen = () => (
  <section className="welcome">
    <div className="welcome__logo">
      <img
        src="img/melody-logo.png"
        alt="Угадай мелодию"
        width="186"
        height="83"
      />
    </div>
    <Link className="welcome__button" to={AppRoute.GAME}>
      <span className="visually-hidden">Начать игру</span>
    </Link>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>Нужно ответить на все вопросы.</li>
      <li>Можно допустить {GameConfig.MAX_MISTAKES_COUNT} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>
);

export default WelcomeScreen;
