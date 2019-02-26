import { TaxInfo } from "./../../../shared/models/taxInfo";
import * as fromAction from "../actions/predio.actions";
import produce from "immer";

export interface State {
  loading: boolean;
  error: any;
  debts: TaxInfo[];
  payOutStatus: boolean;
}

export const initialState: State = {
  loading: false,
  error: null,
  debts: null,
  payOutStatus: false
};

export function reducer(
  state = initialState,
  action: fromAction.PredioActionsUnion
) {
  return produce(state, draft => {
    switch (action.type) {
      case fromAction.PredioActionTypes.LoadPredio:
        draft.loading = true;
        draft.error = null;
        return;
      case fromAction.PredioActionTypes.LoadPredioSuccess:
        draft.debts = action.payload;
        draft.loading = false;
        return;
      case fromAction.PredioActionTypes.LoadPredioError:
        draft.loading = false;
        draft.error = action.payload;
        return;
      case fromAction.PredioActionTypes.LoadPayOutStatus:
        draft.payOutStatus = action.payload;
        return;
    }
  });
}
