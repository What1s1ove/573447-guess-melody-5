import * as React from 'react';
import clsx from 'clsx';
import { BindingCb, WithAudio } from '~/common/types/types';

type Props = {
  isPlaying: boolean;
  onPlayBtnClick: BindingCb;
  src: string;
};

const AudioPlayer: React.FC<Props & WithAudio> = ({
  isPlaying,
  isLoading,
  onPlayBtnClick,
  children,
}) => (
  <>
    <button
      className={clsx(
        `track__button`,
        `track__button--${isPlaying ? `pause` : `play`}`
      )}
      type="button"
      disabled={isLoading}
      onClick={onPlayBtnClick}
      aria-label="Play track"
    />
    <div className="track__status">{children}</div>
  </>
);

export default AudioPlayer;
