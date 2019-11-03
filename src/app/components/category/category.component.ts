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
  public categories:Category[]=[];

  constructor(private categoryService: CategoriesService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
