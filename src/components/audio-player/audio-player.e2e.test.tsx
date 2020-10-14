import * as React from 'react';
import { shallow } from 'enzyme';
import AudioPlayer from './audio-player';

describe(`AudioPlayer component`, () => {
  it(`should call callback if play button click`, () => {
    const onPlayBtnClick = jest.fn();
    const component = shallow(
      <AudioPlayer
        src="play.src"
        isPlaying={false}
        onPlayBtnClick={onPlayBtnClick}
      />
    );

    component.find(`.track__button`).simulate(`click`);

    expect(onPlayBtnClick).toHaveBeenCalled();
  });
});
