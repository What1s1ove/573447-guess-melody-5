import * as React from 'react';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import {
  AnswerGenreQuestionCb,
  ChangeGenreQuestionAnswerCb,
  FormEvent,
  WithActivePlayer,
} from '~/common/types/types';
import GenreQuestionAnswer from '~/components/genre-question-answer/genre-question-answer';
import { getUpdatedAnswers } from './helpers';

const DEFAULT_ANSWERS = [false, false, false, false];

type Props = {
  onAnswer: AnswerGenreQuestionCb;
  question: IGenreQuestion;
};

const GenreQuestionScreen: React.FC<Props & WithActivePlayer> = ({
  onAnswer,
  question,
  renderPlayer,
}) => {
  const [answers, setAnswers] = React.useState<boolean[]>(DEFAULT_ANSWERS);

  const onAnswerChange: ChangeGenreQuestionAnswerCb = (
    answerIdx,
    isChecked
  ) => {
    const updatedAnswers = getUpdatedAnswers(answers, answerIdx, isChecked);

    setAnswers(updatedAnswers);
  };

  const handleFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    onAnswer(question, answers);
  };

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {question.genre} треки</h2>
      <form className="game__tracks" onSubmit={handleFormSubmit}>
        {question.answers.map((answer, idx) => {
          const isChecked = answers[idx];

          return (
            <GenreQuestionAnswer
              answer={answer}
              idx={idx}
              isChecked={isChecked}
              renderPlayer={renderPlayer}
              onAnswerChange={onAnswerChange}
              key={answer.genre}
            />
          );
        })}
        <button className="game__submit button" type="submit">
          Ответить
        </button>
      </form>
    </section>
  );
};

export default GenreQuestionScreen;
