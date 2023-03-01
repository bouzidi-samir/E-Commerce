import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ArticleI } from 'src/admin/models/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['product-list.style.css']
})
export class ProductListComponent  {

  constructor(private router : Router) {}

  @Input()
  articleList = new Array<ArticleI>;

  @Output()
  addCount : EventEmitter<number> = new EventEmitter()

  goToProduct(id : number) {
    this.router.navigate(['/produit', id])
  }

}
