import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/admin/admin.service';
import { ArticleI } from 'src/admin/models/Article';

@Component({
  selector: 'app-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.style.css']
})
export class ProductDetailComponent implements OnInit {

  constructor( private adminService : AdminService, private activeRout : ActivatedRoute)  {} 

  article = new ArticleI();

  ngOnInit() {
    
    const productId : string|null  = this.activeRout.snapshot.paramMap.get('id');
    this.adminService.getProductById(productId)
                    .subscribe(data => this.article = data)

  }
  

}
