import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  type = 'Phone'

  constructor(private router: Router,
    private productServis: ProductService) { }

  ngOnInit(): void {
  }

  setType(type: string) {
    this.type = type
    if (this.type != 'Cart') {
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })
      this.productServis.setType(this.type)
    } else {
      this.router.navigate(['/cart'])
    }

  }

}
