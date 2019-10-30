import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Entities/Category';
//import { Post } from '../Entities/Dto(Main)/Post';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  public initializeProduct(): Category {
    return <Category>{ id: null, name: null};
   }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/post/getProducts/');
  }

  public createCategory(product: Category): void {
    this.http.post('/api/post/createPost/',product);
  }
}