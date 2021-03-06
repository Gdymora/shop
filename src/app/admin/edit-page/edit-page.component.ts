import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ChildActivationStart, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  submitted: boolean = false;
  form: FormGroup
  product: Product

  constructor(
    private route: ActivatedRoute,
    private productServis: ProductService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productServis.getById(params['id'])
      })
    ).subscribe(product => {
      this.product = product
      this.form = new FormGroup({
        type: new FormControl(this.product.type, Validators.required),
        title: new FormControl(this.product.title, Validators.required),
        photo: new FormControl(this.product.photo, Validators.required),
        info: new FormControl(this.product.info, Validators.required),
        price: new FormControl(this.product.price, Validators.required),
      })
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      return
    }
    this.productServis.update({
      ...this.product,
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    }).subscribe(res => {
      this.form.reset()
      this.submitted = false
      this.router.navigate(['/admin', 'dashboard'])
    })
  }

}
