import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  products: any = []
  $pSub: Subscription
  $rSub: Subscription
  constructor(private productServe: ProductService) { }

  ngOnInit(): void {
    this.$pSub = this.productServe.getAll().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

  ngOnDestroy() {
    if (this.$pSub) {
      this.$pSub.unsubscribe()
    }

    if (this.$rSub) {
      this.$rSub.unsubscribe()
    }
  }

  remove(id: string) {
    this.$rSub = this.productServe.remove(id).subscribe(() => {
      this.products = this.products.filter((product: Product) => product.id !== id)
    })
  }

}
