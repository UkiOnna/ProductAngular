import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Entities/Product';
//import { Post } from '../Entities/Dto(Main)/Post';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = [];
  constructor(private http: HttpClient) {
    this.products.push({ id: 1, category: "Sweets", price: 200, name: 'Ice-Cream', categoryId: 1 });
    this.products.push({ id: 2, category: "Baking", price: 80, name: 'Bread', categoryId: 2 });
    this.products.push({ id: 3, category: "Sweets", price: 4200, name: 'Cake', categoryId: 1 });
  }

  public initializeProduct(): Product[] {
    return this.products;
  }

  public getProduct(id: number): Product[] {
    return this.products.filter(a => a.categoryId == id);
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/post/getProducts/');
  }

  public createProduct(product: Product): void {
    this.http.post('/api/post/createPost/', product);
  }
}