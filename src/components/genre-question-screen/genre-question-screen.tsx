/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { BindingCb, ChangeGenreQuestionAnswerCb } from '~/common/types/types';
import GenreQuestionAnswer from '~/components/genre-question-answer/genre-question-answer';
import { getUpdatedAnswers } from './helpers';

const DEFAULT_ANSWERS = [false, false, false, false];

type Props = {
  onAnswer: BindingCb;
  question: IGenreQuestion;
};

const GenreQuestionScreen: React.FC<Props> = ({ question, onAnswer }) => {
  const [answers, setAnswers] = React.useState<boolean[]>(DEFAULT_ANSWERS);

  const changeAnswer: ChangeGenreQuestionAnswerCb = (answerIdx, isChecked) => {
    const updatedAnswers = getUpdatedAnswers(answers, answerIdx, isChecked);

    setAnswers(updatedAnswers);
  };

  return (
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
        <form className="game__tracks">
          {question.answers.map((answer, idx) => {
            const isChecked = answers[idx];

            return (
              <GenreQuestionAnswer
                answer={answer}
                idx={idx}
                isChecked={isChecked}
                changeAnswer={changeAnswer}
                key={answer.genre}
              />
            );
          })}
          <button
            className="game__submit button"
            onClick={onAnswer}
            type="submit"
          >
            Ответить
          </button>
        </form>
      </section>
    </section>
  );
};

export default GenreQuestionScreen;
