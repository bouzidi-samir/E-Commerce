import { Component } from '@angular/core';
import { AdminService } from 'src/admin/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.style.css']
})
export class DashboardComponent {

  constructor(private adminService : AdminService) {}

  

}
