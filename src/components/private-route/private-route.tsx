import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthStatus } from '~/common/enums/enums';
import { RootState } from '~/store/reducer.root';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const { authStatus } = useSelector(({ user }: RootState) => ({
    authStatus: user.status,
  }));

  const isLoggedIn = authStatus === AuthStatus.AUTH;

  if (!isLoggedIn) {
    return <Redirect to={AppRoute.LOGIN} />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
