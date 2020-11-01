import * as React from 'react';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import { WithActivePlayer, WithUserAnswers } from '~/common/types/types';
import GenreQuestionAnswer from '~/components/genre-question-answer/genre-question-answer';

type Props = {
  question: IGenreQuestion;
};

const GenreQuestionScreen: React.FC<
Props & WithActivePlayer & WithUserAnswers
> = ({ userAnswers, question, renderPlayer, onUserAnswer, onAnswerChange }) => (
  <section className="game__screen">
    <h2 className="game__title">Выберите {question.genre} треки</h2>
    <form className="game__tracks" onSubmit={onUserAnswer}>
      {question.answers.map((answer, idx) => {
        const isChecked = userAnswers[idx];

        return (
          <GenreQuestionAnswer
            answer={answer}
            idx={idx}
            isChecked={isChecked}
            renderPlayer={renderPlayer}
            onAnswerChange={onAnswerChange}
            key={answer.src}
          />
        );
      })}
      <button className="game__submit button" type="submit">
        Ответить
      </button>
    </form>
  </section>
);

export default GenreQuestionScreen;
