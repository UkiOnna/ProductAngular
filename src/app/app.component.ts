import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { Category } from './Entities/Category';
import { CategoriesService } from './services/category.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public categories:Category[]=[];
  title = 'APP';
  constructor(private router: Router,private categoryService: CategoriesService){}

  ngOnInit() {
    this.categories=this.categoryService.initializeProduct();
  }
  
  public getProducts() {
    this.router.navigate(['/products']);
  }

  public getProductByCategory(id:number){
    this.router.navigate(['/products/' + id]);
  }
}
