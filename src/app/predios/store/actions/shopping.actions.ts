import { TaxInfo } from "./../../../shared/models/taxInfo";
import { Action } from "@ngrx/store";

export enum ShoppingActionTypes {
  LoadShoppingCart = "[Shopping] Load Shopping Cart",
  LoadShoppingCartSuccess = "[Shopping] Load Shopping Cart Success",
  LoadShoppingCartError = "[Shopping] Load Shopping Cart Error",
  AddToShoppingCart = "[Shopping] Add tax to pay on Shopping Cart",
  AddToShoppingCartSuccess = "[Shopping] Add tax to pay on Shopping Cart Success",
  AddToShoppingCartError = "[Shopping] Add tax to pay on Shopping Cart Error",
  RemoveFromShoppingCart = "[Shopping] Remove tax to pay from Shopping Cart",
  RemoveFromShoppingCartSuccess = "[Shopping] Remove tax to pay from Shopping Cart Success",
  RemoveFromShoppingCartError = "[Shopping] Remove tax to pay from Shopping Cart Error"
}

export class LoadShoppingCart implements Action {
  readonly type = ShoppingActionTypes.LoadShoppingCart;
}

export class LoadShoppingCartSuccess implements Action {
  readonly type = ShoppingActionTypes.LoadShoppingCartSuccess;
  constructor(public payload: TaxInfo[]) {}
}

export class LoadShoppingCartError implements Action {
  readonly type = ShoppingActionTypes.LoadShoppingCartError;
  constructor(public payload: any) {}
}

export class AddToShoppingCart implements Action {
  readonly type = ShoppingActionTypes.AddToShoppingCart;
}

export class AddToShoppingCartSuccess implements Action {
  readonly type = ShoppingActionTypes.AddToShoppingCartSuccess;
  constructor(public payload: TaxInfo) { }
}

export class AddToShoppingCartError implements Action {
  readonly type = ShoppingActionTypes.AddToShoppingCartError;
  constructor(public payload: any) { }
}

export class RemoveFromShoppingCart implements Action {
  readonly type = ShoppingActionTypes.RemoveFromShoppingCart;
}

export class RemoveFromShoppingCartSuccess implements Action {
  readonly type = ShoppingActionTypes.RemoveFromShoppingCartSuccess;
  constructor(public payload: any) { }
}

export class RemoveFromShoppingCartError implements Action {
  readonly type = ShoppingActionTypes.RemoveFromShoppingCartError;
  constructor(public payload: any) { }
}

export type ShoppingActionUnion =
  | LoadShoppingCart
  | LoadShoppingCartSuccess
  | LoadShoppingCartError
  | AddToShoppingCart
  | AddToShoppingCartSuccess
  | AddToShoppingCartError
  | RemoveFromShoppingCart
  | RemoveFromShoppingCartSuccess
  | RemoveFromShoppingCartError;
