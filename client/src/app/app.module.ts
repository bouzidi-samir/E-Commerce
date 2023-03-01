import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminModule } from '../admin/admin.module';
import { ShareModule } from 'src/admin/share/share.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from 'src/admin/admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ShareModule,
    AdminModule,
    AppRoutingModule,
    AdminRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
