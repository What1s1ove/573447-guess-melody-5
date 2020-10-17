import { combineReducers } from 'redux';
import { gameReducer } from '~/store/game/reducer/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
});

export { rootReducer };
