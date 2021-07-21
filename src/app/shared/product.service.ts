import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.fbDbUrl}/products.json`, product)
      .pipe(
        map((res: any) => {
          console.log(res)
          return {
            ...product,
            id: res.name,
            date: new Date(product.date)
          }
        })
      )
  }

  getAll() {
    return this.http.get<Product>(`${environment.fbDbUrl}/products.json`)
      .pipe(map((res: any) => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  getById(id: number) {
    return this.http.get<Product>(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe(map((res: Product) => {
        console.log(res)
        return {
          ...res,
          id,
          date: new Date(res.date)
        }
      }))
  }
}
