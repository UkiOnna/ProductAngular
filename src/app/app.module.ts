import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/product.services';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesService } from './services/category.services';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
