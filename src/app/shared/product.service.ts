import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product, FbResponse } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.fbDbUrl}/products.json`, product)
      .pipe(
        map( (res: any )=> {
          console.log(res)
          return {
            ...product,
            id: res.name,
            date: new Date(product.date)
          }
        })
      )
  }
}
