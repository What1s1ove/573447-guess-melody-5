import * as React from 'react';

import { IDX_NOT_FOUND } from '~/common/constants/constants';
import {
  WithActivePlayer as WithActivePlayerProps,
  RenderPlayerCb,
  Subtract,
} from '~/common/types/types';
import AudioPlayer from '~/components/audio-player/audio-player';
import withAudio from '../with-audio/with-audio';

const DEFAULT_PLAYER_ID = 0;

const WrappedAudioPlayer = withAudio(AudioPlayer);

const withActivePlayer = <P extends WithActivePlayerProps>(
  Component: React.ComponentType<P>
) => {
  const WithActivePlayer: React.FC<Subtract<P, WithActivePlayerProps>> = (
    props
  ) => {
    const [activePlayerId, setPlayerId] = React.useState<number>(
      DEFAULT_PLAYER_ID
    );

    const onPlayBtnClick = (playerId: number) => {
      const updatedPlayerId =
        activePlayerId === playerId ? IDX_NOT_FOUND : playerId;

      setPlayerId(updatedPlayerId);
    };

    const renderPlayer: RenderPlayerCb = (src, playerId) => {
      const isPlaying = activePlayerId === playerId;

      const onLocalPlayBtnClick = () => {
        onPlayBtnClick(playerId);
      };

      return (
        <WrappedAudioPlayer
          src={src}
          isPlaying={isPlaying}
          onPlayBtnClick={onLocalPlayBtnClick}
        />
      );
    };

    return <Component {...(props as P)} renderPlayer={renderPlayer} />;
  };

  return WithActivePlayer;
};

export default withActivePlayer;
