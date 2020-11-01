import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '~/store/reducer.root';
import { createAPI } from '~/services/services';

type ExtraArgs = {
  api: ReturnType<typeof createAPI>;
};

type AppThunk = ThunkAction<void, RootState, ExtraArgs, AnyAction>;

type AppDispatch = ThunkDispatch<RootState, ExtraArgs, AnyAction>;

export { AppThunk, AppDispatch };
