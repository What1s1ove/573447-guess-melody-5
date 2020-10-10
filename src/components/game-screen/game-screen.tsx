import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoute, QuestionType } from '~/common/enums/enums';
import { GameQuestion } from '~/common/types/types';
import GameHeader from '~/components/game-header/game-header';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const DEFAULT_STEP = 0;
const INCREMENT_STEP_COUNT = 1;

type Props = {
  questions: GameQuestion[];
};

const GameScreen: React.FC<Props> = ({ questions }) => {
  const [step, setStep] = React.useState<number>(DEFAULT_STEP);
  const currentQuestion = questions[step];

  const onAnswer = () => {
    const newStep = step + INCREMENT_STEP_COUNT;

    setStep(newStep);
  };

  const getScreen = (question: GameQuestion) => {
    switch (question.type) {
      case QuestionType.GENRE: {
        return <GenreQuestionScreen question={question} onAnswer={onAnswer} />;
      }
      case QuestionType.ARTIST: {
        return <ArtistQuestionScreen question={question} onAnswer={onAnswer} />;
      }
    }

    return null;
  };

  if (step >= questions.length || !currentQuestion) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <section className={`game game--${currentQuestion.type}`}>
      <GameHeader />
      {getScreen(currentQuestion)}
    </section>
  );
};

export default GameScreen;
