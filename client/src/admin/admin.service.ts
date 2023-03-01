import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable } from 'rxjs';
import { ArticleI } from './models/Article';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url : string = "http://localhost:8080/article";

  public articleList! : ArticleI[] ;

  constructor( private client : HttpClient) {
    this.client.get<ArticleI[]>(this.url).subscribe(list => this.articleList = list)
   }

  getProducts() : Observable<ArticleI[]>  { 
    return this.client.get<ArticleI[]>(this.url)
  }

  getProductById(id : string|null) : Observable<ArticleI> {
    return this.client.get<ArticleI>(`${this.url}/${id}`)
  }

  addProduct(article : ArticleI) : Observable<ArticleI>  {
    return this.client.post<ArticleI>(this.url, article)
  }

  getArticleList() : ArticleI[] {return this.articleList};
  
}
