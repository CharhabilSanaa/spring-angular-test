import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ImageProcessingService } from '../image-processing.service';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles:Article[] | undefined;



  constructor(private articleService:ArticleService,
    private imageProcessingService : ImageProcessingService,
    ) { 
      

  }

  ngOnInit(): void {

    this.getArticles();

  }

  private getArticles(){
    this.articleService.getArticlesList()
    .pipe(
      map((x:Article[],i)=>x.map((article:Article)=> this.imageProcessingService.createImages(article)))
    ).subscribe((resp:Article[]) =>{
      console.log(resp);
      this.articles=resp;
    });
  }

 


}
