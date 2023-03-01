import { Component, Input, OnInit } from '@angular/core';
import { ArticleI } from 'src/admin/models/Article';

@Component({
  selector: 'app-searchbar-product',
  templateUrl: './searchbar-product.component.html',
  styleUrls: ['./searchbar-product.style.css']
})
export class SearchbarProductComponent implements OnInit {

  @Input()
  articleList = new Array<ArticleI>;

  newProductForm! : boolean;

  ngOnInit(): void {
    this.newProductForm = false;
  }
  
  displayNewArticleForm(display : boolean) {
    this.newProductForm = display;

  }
}
