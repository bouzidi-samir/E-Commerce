import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from 'src/admin/produit/product/product.component';
import { AdminAuthComponent } from 'src/admin/admin-auth/admin-auth/admin-auth.component';
import { HomeComponent } from 'src/admin/home/home/home.component';

const routes: Routes = [

  {path: '', redirectTo: '/adminAuth', pathMatch: 'full'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
   [RouterModule.forRoot(routes)],
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
