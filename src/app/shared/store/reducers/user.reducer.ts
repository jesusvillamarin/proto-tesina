import { User } from "./../../models/user";
import * as fromUser from "../actions/user.actions";
import produce from "immer";

export interface State {
  loading: boolean;
  error: any;
  user: User;
}

export const initialState: State = {
  loading: false,
  error: null,
  user: null
};

export function reducer(
  state = initialState,
  action: fromUser.UserActionUnion
) {
  return produce(state, draft => {
    switch (action.type) {
      case fromUser.UserActionType.LoadUser:
        draft.loading = true;
        draft.error = false;
        return;
      case fromUser.UserActionType.LoadUserSuccess:
        draft.loading = false;
        draft.user = action.payload;
        return;
      case fromUser.UserActionType.LoadUserError:
        draft.loading = false;
        draft.error = action.payload;
        return;
    }
  });
}
