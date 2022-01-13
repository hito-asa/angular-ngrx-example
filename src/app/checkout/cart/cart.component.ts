import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import * as fromStore from '../../header/store/header.reducer';
import * as fromSelector from '../../header/store/header.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store: Store<fromStore.ShoppingCartState>) {
    this.products$ = this.store.select(fromSelector.cartProducts);
  }

  ngOnInit(): void {
    
  }

}
