import { TaxInfo } from './../../../shared/models/taxInfo';
import { Action } from '@ngrx/store';

export enum PredioActionTypes {
  LoadPredio = '[Predio] Load Predio',
  LoadPredioSuccess = '[Predio] Load Predio Success',
  LoadPredioError = '[Predio] Load Predio Error',
  LoadPayOutStatus = '[Predio] Load Pay Out Status',
}

export class LoadPredio implements Action {
  readonly type = PredioActionTypes.LoadPredio;
}

export class LoadPredioSuccess implements Action {
  readonly type = PredioActionTypes.LoadPredioSuccess;
  constructor(public payload: TaxInfo[]) {}
}

export class LoadPredioError implements Action {
  readonly type = PredioActionTypes.LoadPredioError;
  constructor(public payload: any) {}
}

export class LoadPayOutStatus implements Action {
  readonly type = PredioActionTypes.LoadPayOutStatus;
  constructor(public payload: boolean) {}
}

export type PredioActionsUnion =
  | LoadPredio
  | LoadPredioSuccess
  | LoadPredioError
  | LoadPayOutStatus;

