import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/models/product';

export const incrementCart = createAction(
  '[Header] Increment Cart'
);

export const addToCart = createAction(
  '[Header] Add to Cart',
  props<{ product: Product }>()
);
