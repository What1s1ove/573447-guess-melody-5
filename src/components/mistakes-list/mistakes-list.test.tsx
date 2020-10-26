import * as React from 'react';
import { render } from 'enzyme';
import MistakesList from './mistakes-list';

describe(`MistakesList component`, () => {
  it(`should render MistakesList component`, () => {
    const component = render(<MistakesList mistakesCount={1} />);

    expect(component).toMatchSnapshot();
  });
});
