import { createAction, props } from '@ngrx/store';

export const incrementCart = createAction(
  '[Header] Increment Cart'
);

export const addToCart = createAction(
  '[Header] Add to Cart'
);
