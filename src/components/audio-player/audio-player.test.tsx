import * as React from 'react';
import { render } from 'enzyme';
import AudioPlayer from './audio-player';

describe(`AudioPlayer component`, () => {
  it(`should render AudioPlayer component`, () => {
    const component = render(
      <AudioPlayer
        isPlaying={false}
        isLoading={false}
        onPlayBtnClick={jest.fn()}
        src="play.src"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
