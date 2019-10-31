import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/category.services';
import { Category } from 'src/app/Entities/Category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public categories:Category[];
  constructor(private categoryService: CategoriesService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => this.acceptCategories(result));
  }

  private acceptCategories(categories: Category[]) {
    categories.forEach(r => {
      let category: Category;
      category.name = r.name;
      this.categories.push(category);
    })

  }

}
