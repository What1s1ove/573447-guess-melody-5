import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute, AuthStatus } from '~/common/enums/enums';
import { RootState } from '~/store/reducer.root';

const PrivateRoute: React.FC<RouteProps> = ({ render, path, exact }) => {
  const { authStatus } = useSelector(({ user }: RootState) => ({
    authStatus: user.status,
  }));

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) =>
        authStatus === AuthStatus.AUTH ? (
          render && render(routeProps)
        ) : (
          <Redirect to={AppRoute.LOGIN} />
        )}
    />
  );
};

export default PrivateRoute;
