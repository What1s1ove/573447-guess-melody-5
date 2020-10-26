/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { Subtract, WithAudio as WithAudioProps } from '~/common/types/types';

type Props = {
  isPlaying: boolean;
  src: string;
};

const withAudio = <P extends WithAudioProps & Props>(
  Component: React.ComponentType<P>
) => {
  const WithAudio: React.FC<Subtract<P, WithAudioProps>> = (props) => {
    const { isPlaying, src } = props;
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const audioPlayerRef = React.useRef<HTMLAudioElement | null>(null);

    const handlePlayerCanplaythrough = () => setIsLoading(false);

    React.useEffect(() => {
      const audioNode = audioPlayerRef.current as HTMLAudioElement;

      if (isPlaying) {
        audioNode.play();
      } else {
        audioNode.pause();
      }
    }, [isPlaying]);

    React.useEffect(() => {
      const audioNode = audioPlayerRef.current as HTMLAudioElement;

      audioNode.addEventListener(`canplaythrough`, handlePlayerCanplaythrough);

      audioNode.src = src;

      return () => {
        audioNode.removeEventListener(
          `canplaythrough`,
          handlePlayerCanplaythrough
        );
      };
    }, []);

    return (
      <Component {...(props as P)} isLoading={isLoading}>
        <audio autoPlay={isPlaying} ref={audioPlayerRef} />
      </Component>
    );
  };

  return WithAudio;
};

export default withAudio;
