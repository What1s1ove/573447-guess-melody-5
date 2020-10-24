import configureStore from 'redux-mock-store';
import { RootState } from '~/store/reducer.root';

const storeConfig = configureStore<RootState>();

const store = storeConfig({
  game: {
    step: 1,
    mistakesCount: 1,
  },
});

export { store };
