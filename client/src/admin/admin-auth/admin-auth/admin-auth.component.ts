import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.style.css']
})
export class AdminAuthComponent {

  constructor(private router : Router) {}


  SignIn() {
    this.router.navigate(['/home']);
  }

  SignUn() {
    
  }
}
