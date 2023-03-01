import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth/admin-auth.component';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailComponent } from './produit/product-detail/product-detail.component';
import { ProductComponent } from './produit/product/product.component';

const routes: Routes = [
  {path: 'produit/:id', component: ProductDetailComponent},
  {path: 'produit', component: ProductComponent},
  {path: 'adminAuth', component: AdminAuthComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AdminRoutingModule { }
