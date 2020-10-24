import * as React from 'react';
import { IGenreQuestion } from '~/common/interfaces/interfaces';
import {
  AnswerGenreQuestionCb,
  ChangeGenreQuestionAnswerCb,
  FormEvent,
  GenreQuestionUserAnswers,
  Subtract,
  WithUserAnswers as WithUserAnswersProps,
} from '~/common/types/types';
import { generateDefaultUserAnswers, getUpdatedAnswers } from './helpers';

type Props = {
  question: IGenreQuestion;
  onAnswer: AnswerGenreQuestionCb;
};

const withUserAnswer = <P extends WithUserAnswersProps & Props>(
  Component: React.ComponentType<P>
) => {
  const WithUserAnswer: React.FC<Subtract<P, WithUserAnswersProps>> = (
    props
  ) => {
    const { question, onAnswer } = props;
    const [answers, setAnswers] = React.useState<GenreQuestionUserAnswers>(
      generateDefaultUserAnswers(question.answers)
    );

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
      <Component
        {...(props as P)}
        userAnswers={answers}
        onUserAnswer={handleFormSubmit}
        onAnswerChange={onAnswerChange}
      />
    );
  };

  return WithUserAnswer;
};

export default withUserAnswer;
