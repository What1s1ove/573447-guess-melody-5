import configureStore from 'redux-mock-store';
import { mockedQuestions } from '~/mocks/game/questions.mock';
import { RootState } from '~/store/reducer.root';

const storeConfig = configureStore<RootState>();

const store = storeConfig({
  game: {
    questions: mockedQuestions,
    step: 1,
    mistakesCount: 1,
  },
});

export { store };
