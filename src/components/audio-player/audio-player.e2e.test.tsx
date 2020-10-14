import * as React from 'react';
import { shallow } from 'enzyme';
import AudioPlayer from './audio-player';

describe(`AudioPlayer component`, () => {
  it(`should call callback if play button click`, () => {
    const onPlayButtonClick = jest.fn();
    const component = shallow(
      <AudioPlayer isPlaying={false} onPlayButtonClick={onPlayButtonClick} />
    );

    component.find(`.track__button`).simulate(`click`);

    expect(onPlayButtonClick).toHaveBeenCalled();
  });
});
