import * as React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen';

type Props = {
  errorsCount: number;
};

const App: React.FC<Props> = ({ errorsCount }) => (
  <WelcomeScreen errorsCount={errorsCount} />
);

export default App;
