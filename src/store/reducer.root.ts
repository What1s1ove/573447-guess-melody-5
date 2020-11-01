import { combineReducers } from 'redux';
import {
  gameReducer,
  gameDataReducer,
  userReducer,
} from '~/store/reducers/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  data: gameDataReducer,
  game: gameReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export { RootState };

export default rootReducer;
