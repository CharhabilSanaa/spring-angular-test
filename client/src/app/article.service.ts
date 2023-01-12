import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseURL="http://localhost:8080/articles";
  

  constructor(private httpClient: HttpClient) { 

  }

  getArticlesList():Observable<Article[]>{
    return this.httpClient.get<Article[]>(this.baseURL);
  }

  createArticle(article:Article):Observable<Object>{
    return this.httpClient.post('${this.baseURL}',article);
  }

  public addArticle(article : Article){
    return this.httpClient.post<Article>("http://localhost:8080/articles/add",article);
  }
}
