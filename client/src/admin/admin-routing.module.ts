import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth/admin-auth.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'adminAuth', component: AdminAuthComponent},
  {path: '', redirectTo: '/adminAuth', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
