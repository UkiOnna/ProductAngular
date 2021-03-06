import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Entities/Category';
//import { Post } from '../Entities/Dto(Main)/Post';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public categories:Category[]=[];
  constructor(private http: HttpClient) {
  }

  public initializeProduct(): Category[] {
    this.categories.push({ id: 1, name: "Sweets"})
    this.categories.push({ id: 2, name: "Baking"})
    return this.categories;
   }

   public getCategory(id:Number): Category {
    return this.categories.find(result=>result.id==id);
   }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/post/getProducts/');
  }

  public createCategory(product: Category): void {
    this.http.post('/api/post/createPost/',product);
  }
}