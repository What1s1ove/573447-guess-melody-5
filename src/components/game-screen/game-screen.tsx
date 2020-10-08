import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoute, QuestionType } from '~/common/enums/enums';
import { GameQuestion } from '~/common/types/types';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const DEFAULT_STEP = 0;
const INCREMENT_STEP_COUNT = 1;

type Props = {
  questions: GameQuestion[];
};

const GameScreen: React.FC<Props> = ({ questions }) => {
  const [step, setStep] = React.useState<number>(DEFAULT_STEP);
  const currentQuestion = React.useMemo(() => questions[step], [
    step,
    questions,
  ]);

  const onAnswer = React.useCallback(() => {
    const newStep = step + INCREMENT_STEP_COUNT;

    setStep(newStep);
  }, [step]);

  console.log(step);

  const getScreen = React.useCallback(
    (question: GameQuestion) => {
      switch (question.type) {
        case QuestionType.GENRE: {
          return (
            <GenreQuestionScreen question={question} onAnswer={onAnswer} />
          );
        }
        case QuestionType.ARTIST: {
          return (
            <ArtistQuestionScreen question={question} onAnswer={onAnswer} />
          );
        }
      }
    },
    [onAnswer]
  );

  if (step >= questions.length || !currentQuestion) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return getScreen(currentQuestion);
};

export default GameScreen;
