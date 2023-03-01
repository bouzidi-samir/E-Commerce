import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/admin/share/share.module';
import { ProductComponent } from './product/product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchbarProductComponent } from './searchbar-product/searchbar-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductFormComponent } from './new-product-form/new-product-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    SearchbarProductComponent,
    ProductListComponent,
    NewProductFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    FormsModule,
    ShareModule,

  ]
})
export class ProductModule { }
