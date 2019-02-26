import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export enum UserActionType {
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserError = '[User] Load User Error'
}

export class LoadUser implements Action {
  readonly type = UserActionType.LoadUser;
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionType.LoadUserSuccess;
  constructor(public payload: User) {}
}

export class LoadUserError implements Action {
  readonly type = UserActionType.LoadUserError;
  constructor(public payload: any) {}
}

export type UserActionUnion = LoadUser | LoadUserSuccess | LoadUserError;
