import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '~/common/enums/enums';
import { IUserAuthData } from '~/common/interfaces/interfaces';
import { InputChangeEvent, FormEvent } from '~/common/types/types';
import { UserActionCreator } from '~/store/actions/actions';
import { AuthFormKey, authFormState } from './common';

const AuthScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formState, setFormState] = React.useState<IUserAuthData>(
    authFormState
  );

  const handleFormChange = ({ target }: InputChangeEvent) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name as keyof IUserAuthData]: value,
    });
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    dispatch(UserActionCreator.login(formState));
  };

  const handleGameReplay = () => history.push(AppRoute.GAME);

  return (
    <section className="login">
      <div className="login__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width="186"
          height="83"
        />
      </div>
      <h2 className="login__title">Вы настоящий меломан!</h2>
      <p className="login__text">
        Хотите узнать свой результат? Представьтесь!
      </p>
      <form className="login__form" onSubmit={handleFormSubmit}>
        <p className="login__field">
          <label className="login__label" htmlFor="name">
            Логин
          </label>
          <input
            className="login__input"
            onChange={handleFormChange}
            value={formState.email}
            name={AuthFormKey.EMAIL}
            type="email"
            id="name"
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__input"
            name={AuthFormKey.PASSWORD}
            onChange={handleFormChange}
            value={formState.password}
            type="password"
            id="password"
          />
          <span className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit">
          Войти
        </button>
      </form>
      <button className="replay" onClick={handleGameReplay} type="button">
        Сыграть ещё раз
      </button>
    </section>
  );
};

export default AuthScreen;
