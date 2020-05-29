import { Component, OnInit } from '@angular/core';

import { Product } from '../../product';

import { Observable } from 'rxjs';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../state/product.reducer';
import * as productActions from '../../state/product.actions';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  errorMessage$: Observable<string>;
  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;

  constructor(
    private store: Store<fromProduct.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new productActions.Load());

    this.errorMessage$ = this.store.pipe(select(fromProduct.getError));
    this.displayCode$ = this.store.pipe(select(fromProduct.getShowProductCode));
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.selectedProduct$ = this.store.pipe(select(fromProduct.getCurrentProduct));
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new productActions.ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }
}
