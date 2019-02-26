import { Action } from '@ngrx/store';

export const enum CountActionTypes {
  LoadCount = '[Counter] Load Counter',
  LoadCountSuccess = '[Counter] Loadr Counter Success',
  LoadCountError = '[Counter] Load Counter Error',

  LoadIncrementCount = '[Counter] Load Counter Increment',
  LoadIncrementCountSuccess = '[Counter] Load Counter Increment Success',
  LoadIncrementCountError = '[Counter] Load Counter Increment Error',

  LoadDecrementCount = '[Counter] Load Counter Decrement',
  LoadDecrementCountSuccess = '[Counter] Load Counter Decrement Success',
  LoadDecrementCountError = '[Counter] Load Counter Decrement Error'
}

export class LoadCount implements Action {
  readonly type = CountActionTypes.LoadCount;
}
export class LoadCountSuccess implements Action {
  readonly type = CountActionTypes.LoadCountSuccess;
}
export class LoadCountError implements Action {
  readonly type = CountActionTypes.LoadCountError;
  constructor(public payload: any) {}
}

export class LoadIncrementCount implements Action {
  readonly type = CountActionTypes.LoadIncrementCount;
}

export class LoadIncrementCountSuccess implements Action {
  readonly type = CountActionTypes.LoadIncrementCountSuccess;
}

export class LoadIncrementCountError implements Action {
  readonly type = CountActionTypes.LoadIncrementCountError;
  constructor(public payload: any) {}
}

export class LoadDecrementCount implements Action {
  readonly type = CountActionTypes.LoadDecrementCount;
}

export class LoadDecrementCountSuccess implements Action {
  readonly type = CountActionTypes.LoadDecrementCountSuccess;
}

export class LoadDecrementCountError implements Action {
  readonly type = CountActionTypes.LoadDecrementCountError;
  constructor(public payload: any) {}
}

export type CountActionUnion =
  | LoadCount
  | LoadCountSuccess
  | LoadCountError
  | LoadIncrementCount
  | LoadIncrementCountSuccess
  | LoadIncrementCountError
  | LoadDecrementCount
  | LoadDecrementCountSuccess
  | LoadDecrementCountError;
