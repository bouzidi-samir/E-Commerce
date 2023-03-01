import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
import { ShareModule } from 'src/admin/share/share.module';
import { HomeModule } from './home/home.module';
import { ProductModule } from './produit/product.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShareModule,
    AdminAuthModule,
    HomeModule, 
    ProductModule
  ],
})
export class AdminModule { }
