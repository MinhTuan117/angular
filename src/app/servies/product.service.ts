import { Injectable } from '@angular/core';
import { TypeProduct } from '../product/product';
import { dataFake } from '../data-fake';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: TypeProduct[]  = dataFake;
  api:string = 'https://610c730f66dd8f0017b76d9e.mockapi.io/product';

  constructor(
    private http : HttpClient
  ) { }

  getProducts(): Observable<TypeProduct[]> {
    return this.http.get<TypeProduct[]>(this.api);
    // return this.products;
  }

  get(id:any): Observable<TypeProduct> {
    return this.http.get<TypeProduct>(`${this.api}/${id}`);
  }

  addProduct(item: TypeProduct): Observable<TypeProduct> {
    return this.http.post<TypeProduct>(this.api, item);
     // this.products.push(item);
      // console.log(this.products);
      // this.item = product;
  }
  removeProduct(id: number): Observable<TypeProduct> {
    return this.http.delete<TypeProduct>(`${this.api}/${id}`);
  }

  updateProduct(item: TypeProduct): Observable<TypeProduct> {
    return this.http.put<TypeProduct>(`${this.api}/${item.id}`, item);
  }
}
