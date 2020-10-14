import * as React from 'react';
import { render } from 'enzyme';
import AudioPlayer from './audio-player';

describe(`AudioPlayer component`, () => {
  it(`should render AudioPlayer component`, () => {
    const component = render(
      <AudioPlayer
        src="play.src"
        isPlaying={false}
        onPlayBtnClick={jest.fn()}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
