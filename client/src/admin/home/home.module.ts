import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShareModule } from 'src/admin/share/share.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule, 
    ShareModule,
  ]
})
export class HomeModule { }
