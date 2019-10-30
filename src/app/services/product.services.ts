import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Entities/Product';
//import { Post } from '../Entities/Dto(Main)/Post';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  public initializeProduct(): Product {
    return <Product>{ id: null, categoryId: null, price: null, name: null};
   }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/post/getProducts/');
  }

  public createProduct(product: Product): void {
    this.http.post('/api/post/createPost/',product);
  }
}