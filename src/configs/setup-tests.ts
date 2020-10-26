import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

React.useLayoutEffect = React.useEffect;

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-console
console.error = (message: string) => {
  throw new Error(message);
};
