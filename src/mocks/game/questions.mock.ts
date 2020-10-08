import { GameQuestion } from '~/common/types/types';
import { mockedArtistQuestion } from '~/mocks/game/artist-question.mock';
import { mockedGenreQuestion } from '~/mocks/game/genre-question.mock';

const questions: GameQuestion[] = [mockedArtistQuestion, mockedGenreQuestion];

export { questions };
