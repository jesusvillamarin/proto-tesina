import { ActionReducerMap } from '@ngrx/store';
import * as fromPredio from './predio.reducer';
import * as fromShopping from './shopping.reducer';
import * as fromCount from './count.reducer';

export interface PredioState {
  predio: fromPredio.State;
  shopping: fromShopping.State;
  counter: fromCount.State;
}

export const predioReducers: ActionReducerMap<PredioState> = {
  predio: fromPredio.reducer,
  shopping : fromShopping.reducer,
  counter: fromCount.reducer
}
