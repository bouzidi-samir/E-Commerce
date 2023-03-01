import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/admin/admin.service';
import { ArticleI } from 'src/admin/models/Article';

@Component({
  selector: 'app-produit',
  templateUrl: 'product.component.html',
  styleUrls: ['produit.style.css']
})
export class ProductComponent implements OnInit {

  articleList! : ArticleI[];

  constructor(private adminService : AdminService) {
    }

    ngOnInit() {
        this.adminService.getProducts().subscribe(list => this.articleList = list);
    }

}
