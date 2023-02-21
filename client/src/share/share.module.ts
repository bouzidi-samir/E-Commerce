import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponentComponent } from './components/navbar-component/navbar.component';

@NgModule({
  declarations: [
    NavbarComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponentComponent]
})
export class ShareModule { }
