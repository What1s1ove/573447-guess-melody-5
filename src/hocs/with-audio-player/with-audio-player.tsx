import * as React from 'react';
import { IDX_NOT_FOUND } from '~/common/constants/constants';
import { RenderPlayerCb } from '~/common/types/types';
import AudioPlayer from '~/components/audio-player/audio-player';

const DEFAULT_PLAYER_ID = 1;

const withActivePlayer = <T extends {}>(Component: React.FC<T>) => {
  const WithActivePlayer: React.FC<T> = (props) => {
    const [activePlayerId, setPlayerId] = React.useState<number>(DEFAULT_PLAYER_ID);

    const onPlayBtnClick = (playerId: number) => {
      const updatedPlayerId = activePlayerId === playerId ? IDX_NOT_FOUND : playerId;

      setPlayerId(updatedPlayerId);
    };

    const renderPlayer: RenderPlayerCb = (src, playerId) => {
      const isPlaying = activePlayerId === playerId;

      const onLocalPlayBtnClick = () => {
        onPlayBtnClick(playerId);
      };

      return (
        <AudioPlayer
          src={src}
          isPlaying={isPlaying}
          onPlayBtnClick={onLocalPlayBtnClick}
        />
      );
    };

    return (
      <>
        <Component {...props} renderPlayer={renderPlayer} />
      </>
    );
  };

  return WithActivePlayer;
};

export default withActivePlayer;
