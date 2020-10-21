import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '~/common/enums/enums';
import { GameQuestion } from '~/common/types/types';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';
import GameScreen from '~/components/game-screen/game-screen';
import AuthScreen from '~/components/auth-screen/auth-screen';
import GameOverScreen from '~/components/game-over-screen/game-over-screen';
import WinScreen from '~/components/win-screen/win-screen';

type Props = {
  questions: GameQuestion[];
};

const App: React.FC<Props> = ({ questions }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={AppRoute.ROOT}>
        <WelcomeScreen />
      </Route>
      <Route exact path={AppRoute.LOGIN}>
        <AuthScreen />
      </Route>
      <Route exact path={AppRoute.GAME}>
        <GameScreen questions={questions} />
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
