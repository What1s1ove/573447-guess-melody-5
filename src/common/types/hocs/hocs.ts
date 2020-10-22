import { RenderPlayerCb } from '~/common/types/game/game';

type WithActivePlayer = {
  renderPlayer: RenderPlayerCb;
};

type WithAudio = {
  isLoading: boolean;
};

export { WithActivePlayer, WithAudio };
