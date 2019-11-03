import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Entities/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/product.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products:Product[]=[];
  constructor(private productService: ProductsService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.products.length=0;
        this.products.splice(0,this.products.length);
        this.products=this.productService.getProduct(id);
      }
      else{
        this.products.length=0;
        this.products.splice(0,this.products.length);
        this.products=this.productService.initializeProduct();
      }
    });

  }

}
