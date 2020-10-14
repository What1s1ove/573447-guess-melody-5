/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import clsx from 'clsx';
import { BindingCb } from '~/common/types/types';

type Props = {
  src: string;
  isPlaying: boolean;
  onPlayBtnClick: BindingCb;
};

const AudioPlayer: React.FC<Props> = ({ isPlaying, onPlayBtnClick }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const audioPlayerRef = React.useRef<null | HTMLAudioElement>(null);

  const handlePlayerCanplaythrough = () => {
    setIsLoading(false);
  };

  React.useEffect(() => {
    audioPlayerRef.current?.addEventListener(
      `canplaythrough`,
      handlePlayerCanplaythrough
    );

    return () => {
      audioPlayerRef.current?.removeEventListener(
        `canplaythrough`,
        handlePlayerCanplaythrough
      );
    };
  }, []);

  return (
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
      <div className="track__status">
        <audio autoPlay={isPlaying} ref={audioPlayerRef} />
      </div>
    </>
  );
};

export default AudioPlayer;
