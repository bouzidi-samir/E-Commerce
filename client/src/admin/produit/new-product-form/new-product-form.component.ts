import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from 'src/admin/admin.service';
import { ArticleI } from 'src/admin/models/Article';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['new-product-form.style.css']
})
export class NewProductFormComponent {

  public newArticle : ArticleI = new ArticleI();

  constructor(private adminService : AdminService) {}

  @Input()
  articleList = new Array<ArticleI>;

  @Output() 
  public closeNewProductForm : EventEmitter<boolean> = new EventEmitter();

  onCloseForm() {
   this.closeNewProductForm.emit(false);
  }

  onSubmit(registerForm : NgForm) {
    console.log(registerForm.form);
    console.log(JSON.stringify(registerForm.value));
    console.log(this.newArticle);
    this.articleList.push(this.newArticle);
    this.adminService.addProduct(this.newArticle).subscribe(article => this.adminService.articleList.push(article));

  }

}
