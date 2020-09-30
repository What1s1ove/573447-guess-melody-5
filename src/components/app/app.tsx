import React, { FC } from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type Props = {
  errorsCount: number;
};

const App: FC<Props> = ({ errorsCount }) => (
  <WelcomeScreen errorsCount={errorsCount} />
);

export default App;
