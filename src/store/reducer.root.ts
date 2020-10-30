import { combineReducers } from 'redux';
import { gameReducer, gameDataReducer } from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  data: gameDataReducer,
  game: gameReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { RootState };

export default rootReducer;
