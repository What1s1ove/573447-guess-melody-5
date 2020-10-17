import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GameActionCreator } from '~/store/actions/actions';
import { RootState } from '~/store/reducer.root';
import { AppRoute, QuestionType } from '~/common/enums/enums';
import {
  GameQuestion,
  IncrementStepAc,
  ResetGameAc,
} from '~/common/types/types';
import withActivePlayer from '~/hocs/with-audio-player/with-audio-player';
import GameHeader from '~/components/game-header/game-header';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

type Props = {
  step: number;
  questions: GameQuestion[];
  incrementStep: IncrementStepAc;
  resetGame: ResetGameAc;
};

const GameScreen: React.FC<Props> = ({ step, questions, incrementStep }) => {
  const currentQuestion = questions[step];

  const onAnswer = () => {
    incrementStep();
  };

  const getScreen = (question: GameQuestion) => {
    switch (question.type) {
      case QuestionType.GENRE: {
        return (
          <GenreQuestionScreenWrapped
            key={question.id}
            onAnswer={onAnswer}
            question={question}
          />
        );
      }
      case QuestionType.ARTIST: {
        return (
          <ArtistQuestionScreenWrapped
            key={question.id}
            onAnswer={onAnswer}
            question={question}
          />
        );
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

export default connect(
  ({ game }: RootState) => ({
    step: game.step,
  }),
  {
    incrementStep: GameActionCreator.incrementStep,
    resetGame: GameActionCreator.resetGame,
  }
)(GameScreen);
