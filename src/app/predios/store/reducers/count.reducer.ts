import produce from "immer";
import * as fromCount from "../actions/count.actions";

export interface State {
  loading: boolean;
  error: any;
  counter: number;
}

export const initialState: State = {
  loading: false,
  error: null,
  counter: 0
};

export function reducer(
  state = initialState,
  action: fromCount.CountActionUnion
) {
  return produce(state, draft => {
    switch (action.type) {
      case fromCount.CountActionTypes.LoadCount:
        draft.loading = true;
        draft.error = false;
        return;
      case fromCount.CountActionTypes.LoadCountSuccess:
        draft.loading = false;
        return;
      case fromCount.CountActionTypes.LoadCountError:
        draft.loading = false;
        draft.error = action.payload;
        return;
      case fromCount.CountActionTypes.LoadIncrementCount:
        draft.loading = true;
        draft.error = false;
        return;
      case fromCount.CountActionTypes.LoadIncrementCountSuccess:
        draft.loading = false;
        draft.counter += 1;
        return;
      case fromCount.CountActionTypes.LoadIncrementCountError:
        draft.loading = false;
        draft.error = action.payload;
        return;
      case fromCount.CountActionTypes.LoadDecrementCount:
        draft.loading = true;
        draft.error = false;
        return;
      case fromCount.CountActionTypes.LoadDecrementCountSuccess:
        draft.loading = false;
        draft.counter -= 1;
        return;
      case fromCount.CountActionTypes.LoadDecrementCountError:
        draft.loading = false;
        draft.error = action.payload;
        return;
    }
  });
}
