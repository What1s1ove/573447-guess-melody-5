import * as React from 'react';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import { AppRoute } from '~/common/enums/enums';
import WelcomeScreen from '~/components/welcome-screen/welcome-screen';
import GameScreen from '~/components/game-screen/game-screen';
import AuthScreen from '~/components/auth-screen/auth-screen';
import GameOverScreen from '~/components/game-over-screen/game-over-screen';
import WinScreen from '~/components/win-screen/win-screen';
import PrivateRoute from '~/components/private-route/private-route';
import browserHistory from '~/browser-history';

const App: React.FC = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path={AppRoute.ROOT} component={WelcomeScreen} exact />
      <Route path={AppRoute.LOGIN} component={AuthScreen} exact />
      <Route path={AppRoute.GAME} component={GameScreen} exact />
      <Route path={AppRoute.LOSE} component={GameOverScreen} exact />
      <PrivateRoute path={AppRoute.RESULT} component={WinScreen} exact />
    </Switch>
  </BrowserRouter>
);

export default App;
