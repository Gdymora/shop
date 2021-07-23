import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartProducts: Product[] = []
  totalPrice = 0

  constructor(private productServis: ProductService) { }

  ngOnInit(): void {
    this.cartProducts = this.productServis.cartProducts
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price
    }
  }

}
