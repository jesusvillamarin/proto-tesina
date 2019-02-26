import { environment } from './../../../../environments/environment';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { PredioState } from '../../../predios/store/reducers';
import * as fromUser from './user.reducer';

export interface AppState {
  predio?: PredioState;
  user: fromUser.State;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
