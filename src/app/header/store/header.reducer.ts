import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';
import * as ShoppingCartActions from './header.actions';

export const headerFeatureKey = 'header';

export interface ShoppingCartState extends EntityState<Product> {
  cartCount: number;
}
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: ShoppingCartState =  adapter.getInitialState({
  cartCount: 0,
});

export const reducer = createReducer(
  initialState,
  on(ShoppingCartActions.incrementCart, state => ({ ...state, cartCount: state.cartCount + 1})),
  on(ShoppingCartActions.addToCart, state => ({ ...state, cartCount: state.cartCount + 1}))
);
