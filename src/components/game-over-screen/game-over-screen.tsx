import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GameActionCreator } from '~/store/actions/actions';
import { AppRoute } from '~/common/enums/enums';

const GameOverScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleGameReset = () => {
    dispatch(GameActionCreator.resetGame());
    history.push(AppRoute.GAME);
  };

  return (
    <section className="result">
      <div className="result__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width="186"
          height="83"
        />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">
        У вас закончились все попытки. Ничего, повезёт в следующий раз!
      </p>
      <button className="replay" onClick={handleGameReset} type="button">
        Попробовать ещё раз
      </button>
    </section>
  );
};

export default GameOverScreen;
