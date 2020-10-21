import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GameActionCreator } from '~/store/actions/actions';
import { RootState } from '~/store/reducer.root';
import { AppRoute, GameConfig, QuestionType } from '~/common/enums/enums';
import {
  GameQuestion,
  UserAnswerCb,
  GameAnswer,
  BindingCb,
} from '~/common/types/types';
import withActivePlayer from '~/hocs/with-audio-player/with-audio-player';
import GameHeader from '~/components/game-header/game-header';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const GenreQuestionScreenWrapped = withActivePlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

type Props = {
  step: number;
  mistakesCount: number;
  questions: GameQuestion[];
  onAnswer: UserAnswerCb;
  resetGame: BindingCb;
};

const GameScreen: React.FC<Props> = ({
  step,
  questions,
  mistakesCount,
  onAnswer,
  resetGame,
}) => {
  const currentQuestion = questions[step];

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

  if (step >= GameConfig.MAX_MISTAKES_COUNT || !currentQuestion) {
    resetGame();

    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <section className={`game game--${currentQuestion.type}`}>
      <GameHeader mistakesCount={mistakesCount} />
      {getScreen(currentQuestion)}
    </section>
  );
};

export { GameScreen };

export default connect(
  ({ game }: RootState) => ({
    step: game.step,
    mistakesCount: game.mistakesCount,
  }),
  (dispatch) => ({
    onAnswer: (question: GameQuestion, answer: GameAnswer) => {
      dispatch(GameActionCreator.incrementStep());
      dispatch(GameActionCreator.incrementMistake(question, answer));
    },
    resetGame: () => {
      dispatch(GameActionCreator.resetGame());
    },
  })
)(GameScreen);
