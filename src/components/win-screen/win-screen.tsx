import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GameActionCreator } from '~/store/actions/actions';
import { AppRoute } from '~/common/enums/enums';
import { RootState } from '~/store/reducer.root';

const WinScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { questionsCount, mistakesCount } = useSelector(
    ({ game }: RootState) => ({
      questionsCount: game.step,
      mistakesCount: game.mistakesCount,
    })
  );

  const correctlyQuestionsCount = questionsCount - mistakesCount;

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
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">
        Вы ответили правильно на {correctlyQuestionsCount} вопросов и совершили {mistakesCount} ошибки
      </p>
      <button className="replay" onClick={handleGameReset} type="button">
        Сыграть ещё раз
      </button>
    </section>
  );
};

export default WinScreen;
