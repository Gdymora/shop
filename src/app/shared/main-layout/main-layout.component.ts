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
    if (this.type != 'Cart'){
      this.router.navigate(['/'], {
        queryParams: {
          type: this.type
        }
      })
      console.log(this.type + "--ddd")
      this.productServis.setType(this.type)
    } else {
      console.log(this.type + "ddd")
      this.router.navigate(['/cart'])
    }

  }

}
