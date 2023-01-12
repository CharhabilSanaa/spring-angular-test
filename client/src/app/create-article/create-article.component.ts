import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FileHandle } from '../file-handle.model';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})


export class CreateArticleComponent implements OnInit {

  article:Article = new Article();

  constructor(private sanitizer : DomSanitizer,
    private articleService :ArticleService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveArticle();
    this.article.id=9;
    console.log(this.article);
    this.goToArticleList();

  }

  onFileSelected(event: Event){

    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;


    if (fileList) {
      console.log("FileUpload -> files", fileList);
      /*const fileHandle :FileHandle = {
        file:fileList[0],
        url : this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(fileList[0])
        )
      }*/

      //
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const bytes = e.target.result.split('base64,')[1];
        this.getbytes(bytes);
        console.log("bytes : ",bytes);
        //this.article.image=bytes;


      };
      const test=reader.readAsDataURL(fileList[0]);
      //console.log("test to bytes");
      //console.log(test);

      //

  
    }

  }

  saveArticle(){
    this.articleService.addArticle(this.article).subscribe(
      data =>{
        console.log(data);
      },
    );
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

  getbytes(bytes : any){
    console.log(bytes);
    this.article.image=bytes;
    return this.article;
  }

  /*public createBytes(article : Article){


    const reader = new FileReader();
      reader.onload = (e: any) => {
        const bytes = e.target.result.split('base64,')[1];
        console.log("bytes : ",bytes);
        article.image=bytes;
      }

      console.log(article.name);
      console.log(article.price);
      console.log(article.image);

      return article;



    

  }*/

 

}
