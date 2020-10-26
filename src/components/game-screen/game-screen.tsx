import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GameActionCreator } from '~/store/actions/actions';
import { RootState } from '~/store/reducer.root';
import { AppRoute, GameConfig, QuestionType } from '~/common/enums/enums';
import { GameQuestion, GameAnswer } from '~/common/types/types';
import withActivePlayer from '~/hocs/with-audio-player/with-audio-player';
import withUserAnswer from '~/hocs/with-user-answer/with-user-answer';
import GameHeader from '~/components/game-header/game-header';
import GenreQuestionScreen from '~/components/genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '~/components/artist-question-screen/artist-question-screen';

const GenreQuestionScreenWrapped = withUserAnswer(
  withActivePlayer(GenreQuestionScreen)
);
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);

const GameScreen: React.FC = () => {
  const { questions, step, mistakesCount } = useSelector(({ game }: RootState) => ({
    questions: game.questions,
    step: game.step,
    mistakesCount: game.mistakesCount,
  }));
  const dispatch = useDispatch();
  const currentQuestion = questions[step];

  const handleAnswer = (question: GameQuestion, answer: GameAnswer) => {
    dispatch(GameActionCreator.incrementStep());
    dispatch(GameActionCreator.incrementMistake(question, answer));
  };

  const getScreen = (question: GameQuestion) => {
    switch (question.type) {
      case QuestionType.GENRE: {
        return (
          <GenreQuestionScreenWrapped
            key={question.id}
            onAnswer={handleAnswer}
            question={question}
          />
        );
      }
      case QuestionType.ARTIST: {
        return (
          <ArtistQuestionScreenWrapped
            key={question.id}
            onAnswer={handleAnswer}
            question={question}
          />
        );
      }
    }

    return null;
  };

  if (mistakesCount >= GameConfig.MAX_MISTAKES_COUNT) {
    return <Redirect to={AppRoute.LOSE} />;
  }

  if (step >= questions.length || !currentQuestion) {
    return <Redirect to={AppRoute.RESULT} />;
  }

  return (
    <section className={`game game--${currentQuestion.type}`}>
      <GameHeader mistakesCount={mistakesCount} />
      {getScreen(currentQuestion)}
    </section>
  );
};

export default GameScreen;
