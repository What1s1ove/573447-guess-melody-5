import { combineReducers } from 'redux';
import { gameReducer } from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  game: gameReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { RootState };

export default rootReducer;
