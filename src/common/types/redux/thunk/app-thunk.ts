import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '~/store/reducer.root';
import {createAPI} from '~/services/services';

type ExtraArgs = typeof createAPI;

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, ExtraArgs, Action<string>>;

export { AppThunk };
