import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Observable, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product$: Observable<any>;



  constructor(
    private productServis: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(
        params => {
          return this.productServis.getById(params['id'])
        }
      ))
  }

}
