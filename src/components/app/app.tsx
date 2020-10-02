import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import { AppRoute } from '~/common/enums/app/app-route.enum';

type Props = {
  errorsCount: number;
};

const App: React.FC<Props> = ({ errorsCount }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <WelcomeScreen errorsCount={errorsCount} />
      </Route>
      <Route exact path={AppRoute.DEV_ARTISTS}>
        <ArtistQuestionScreen />
      </Route>
      <Route exact path={AppRoute.DEV_GENRE}>
        <GenreQuestionScreen />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <AuthScreen />
      </Route>
      <Route exact path={AppRoute.RESULT}>
        <WinScreen />
      </Route>
      <Route exact path={AppRoute.LOSE}>
        <GameOverScreen />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
