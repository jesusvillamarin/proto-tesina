import { TaxInfo } from './../../../shared/models/taxInfo';
import produce from 'immer';
import * as fromShopping from '../actions/shopping.actions';

export interface State {
  loading: boolean;
  error: any;
  shoppingCart: TaxInfo[];
}

export const initialState: State = {
  loading: false,
  error: null,
  shoppingCart: null
};

export function reducer(
  state = initialState,
  action: fromShopping.ShoppingActionUnion
) {
  return produce(state, draft => {
    switch (action.type) {
      case fromShopping.ShoppingActionTypes.LoadShoppingCart:
        draft.loading = true;
        draft.error = false;
        return;
      case fromShopping.ShoppingActionTypes.LoadShoppingCartSuccess:
        draft.loading = false;
        draft.shoppingCart = action.payload;
        return;
      case fromShopping.ShoppingActionTypes.LoadShoppingCartError:
        draft.loading = false;
        draft.error = action.payload;
        return;
      case fromShopping.ShoppingActionTypes.AddToShoppingCart:
        draft.loading = true;
        draft.error = false;
        return;
      case fromShopping.ShoppingActionTypes.AddToShoppingCartSuccess:
        draft.loading = false;
        draft.shoppingCart.push(action.payload);
        return;
      case fromShopping.ShoppingActionTypes.AddToShoppingCartError:
        draft.loading = false;
        draft.error = action.payload;
        return;
      case fromShopping.ShoppingActionTypes.RemoveFromShoppingCart:
        draft.loading = true;
        draft.error = false;
        return;
      case fromShopping.ShoppingActionTypes.RemoveFromShoppingCartSuccess:
        draft.loading = false;
        delete draft.shoppingCart[action.payload];
        return;
      case fromShopping.ShoppingActionTypes.RemoveFromShoppingCartError:
        draft.loading = false;
        draft.error = action.payload;
    }
  });
}
